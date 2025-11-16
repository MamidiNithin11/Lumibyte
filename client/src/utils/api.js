const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function fetchSessions() {
  const res = await fetch(`${API_BASE}/sessions`);
  return res.json();
}

export async function newChat() {
  const res = await fetch(`${API_BASE}/new-chat`);
  return res.json();
}

export async function fetchSession(sessionId) {
  const res = await fetch(`${API_BASE}/session/${sessionId}`);
  return res.json();
}

export async function postChat(sessionId, question) {
  const res = await fetch(`${API_BASE}/chat/${sessionId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  return res.json();
}
