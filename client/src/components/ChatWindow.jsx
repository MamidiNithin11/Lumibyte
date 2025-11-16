import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchSession, postChat } from "../utils/api";
import MessageBubble from "./MessageBubble";
import ThemeToggle from './ThemeToggle';

export default function ChatWindow() {
  const { sessionId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const bottomRef = useRef();

  useEffect(() => {
    if (sessionId) loadMessages();
  }, [sessionId]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const loadMessages = async () => {
    const data = await fetchSession(sessionId);
    setMessages(data.messages || []);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const text = input;
    setInput("");

    await postChat(sessionId, text);
    await loadMessages();
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col h-1/1 bg-white dark:bg-gray-900">
      <div className="p-4 flex justify-end">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      <div className="flex-1 overflow-auto px-6 py-4">
        {messages.map((msg) => (
          <MessageBubble
            key={msg._id}
            sender={msg.sender}
            message={msg.message}
            table={msg.table}
          />
        ))}
        <div ref={bottomRef}></div>
      </div>
      <div className="border-t p-4 bg-white">
        <div className="flex max-w-4xl mx-auto gap-2">
          <input
            className="flex-1 p-3 rounded-xl border text-gray-800"
            placeholder="Send a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={sendMessage}
            className="px-6 bg-green-600 text-white rounded-xl shadow"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
