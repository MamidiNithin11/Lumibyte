import React from "react";
import { useNavigate } from "react-router-dom";
import { newChat } from "../utils/api";

export default function LandingPage() {
  const navigate = useNavigate();

  const startChat = async () => {
    const res = await newChat();
    navigate(`/chat/${res.sessionId}`);
  };

  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-4xl font-bold mb-4">Welcome to Lumibyte Chat</h1>
      <button
        onClick={startChat}
        className="px-6 py-3 bg-blue-600 text-white rounded"
      >
        Start New Chat
      </button>
    </div>
  );
}
