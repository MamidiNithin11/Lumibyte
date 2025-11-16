import Session from "../models/Session.js";
import Message from "../models/Message.js";

export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find().sort({ updatedAt: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const createNewSession = async (req, res) => {
  try {
    const session = await Session.create({
      title: `New Chat ${Date.now()}`,
    });

    await Message.create({
      sessionId: session._id,
      sender: "bot",
      message: "Session created. Say hi!",
    });
    res.json({ sessionId: session._id, title: session.title });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSessionById = async (req, res) => {
  try {
    const { id } = req.params;
    const session = await Session.findById(id);

    if (!session)
      return res.status(404).json({ message: "Session not found" });

    const messages = await Message.find({ sessionId: id }).sort({
      createdAt: 1,
    });

    res.json({
      sessionId: id,
      title: session.title,
      messages,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
