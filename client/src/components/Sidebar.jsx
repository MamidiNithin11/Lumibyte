import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchSessions, newChat } from "../utils/api";

export default function Sidebar() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();
  const { sessionId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await fetchSessions();
      setSessions(data || []);
    })();
  }, []);

  const createChat = async () => {
    const res = await newChat();
    navigate(`/chat/${res.sessionId}`);
  };

  return (
    <aside className="w-72 border-r h-screen p-4 flex flex-col">
      <button
        onClick={createChat}
        className="w-full bg-blue-600 text-white py-2 rounded-xl mb-4 hover:bg-blue-700"
      >
        + New Chat
      </button>

      <div className="text-xs uppercase text-gray-500 mb-3">Chats</div>

      <div className="flex-1 overflow-auto space-y-1">
        {sessions.map((s) => (
          <Link
            key={s._id}
            to={`/chat/${s._id}`}
            className={`block p-2 rounded-lg hover:bg-gray-200 truncate ${
              s._id === sessionId
                ? "bg-gray-300 font-semibold text-gray-800"
                : ""
            }`}
          >
            {s.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}
