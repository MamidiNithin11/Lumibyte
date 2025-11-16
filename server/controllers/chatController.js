import Message from "../models/Message.js";
import Session from "../models/Session.js";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
// OpenRouter Better to Use for API . OpenAI cannot give any access to any models
  baseURL: "https://openrouter.ai/api/v1"
});

export const handleChat = async (req, res) => {
  try {
    const { id } = req.params;
    const { question } = req.body;
    if (!question){
        return res.status(400).json({
            message: "Question is required"
        })
    }
    const session = await Session.findById(id);
    if (!session){
         return res.status(404).json({
            message: "Session not found"
         });
    }  
    // Save user message
    await Message.create({
      sessionId: id,
      sender: "user",
      message: question,
    });

    // Get AI response
    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "system",
          content: `
            You are a helpful AI assistant. 
            Always answer clearly and ALSO provide a table in JSON array format like:
            [
              {"key": "Example", "value": "sample"}
            ]
          `
        },
        {
          role: "user",
          content: question
        }
      ]
    });
    const aiText = completion.choices[0].message.content;

    let extractedTable = [];
    try {
      const match = aiText.match(/\[[\s\S]*\]/);
      if (match) extractedTable = JSON.parse(match[0]);
    } catch {
      extractedTable = [];
    }

    // Save bot response on message collection
    await Message.create({
      sessionId: id,
      sender: "bot",
      message: aiText,
      table: extractedTable
    });

    // Send response back to client
    res.json({
      message: aiText,
      table: extractedTable
    });

  } catch (err) {
    console.error("OpenAI Error:", err);
    res.status(500).json({ error: err.message });
  }
};
