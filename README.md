Understood — here is a **clean, professional, moderate-length README** (not too long, not too short).
Perfect for GitHub, interviews, and assignment submission.

Copy/paste into your **README.md**.

---

# 🚀 Lumibyte Chat Application

A full-stack ChatGPT-style chat application built with **React**, **Node.js**, **Express**, **MongoDB Atlas**, and **OpenRouter AI**.
Users can start new chat sessions, send messages, and receive AI-powered responses with structured (tabular) data.

---

## ✨ Features

* 🧠 **AI-powered responses** (via OpenRouter GPT models)
* 💬 **ChatGPT-style UI** with markdown & code highlighting
* 📄 **Session-based conversations** stored in MongoDB
* 🗂 **Sidebar to view all past sessions**
* 📊 **Structured data extraction (tables)**
* 🎨 **Modern Tailwind UI** with light/dark mode

---

## 🧱 Tech Stack

### **Frontend**

* React (Vite/Cra)
* Tailwind CSS
* React Markdown + Syntax Highlighter
* ChatGPT-style UI components

### **Backend**

* Node.js
* Express.js
* Mongoose (MongoDB Atlas)
* OpenRouter AI API

---

## 📁 Project Structure

```
chatapplication/
├── .gitignore
│
├── client/                          # Frontend (React + Vite)
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── TableResponse.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── pages/
│   │   │   ├── ChatPage.jsx
│   │   │   └── LandingPage.jsx
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
│
└── server/                          # Backend (Node.js + Express)
    ├── config/
    │   └── db.js                    # Database configuration
    ├── controllers/
    │   ├── chatController.js        # Chat logic
    │   └── sessionController.js     # Session management
    ├── models/
    │   ├── Message.js               # Message model
    │   └── Session.js               # Session model
    ├── routes/
    │   ├── chatRoutes.js            # Chat API routes
    │   └── sessionRoutes.js         # Session API routes
    ├── package.json
    ├── package-lock.json
    └── server.js                    # Entry point
```

---

## ⚙️ Backend Setup

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Create `.env`

```
MONGO_URI=your-mongodb-atlas-uri
OPENROUTER_API_KEY=your-openrouter-key
PORT=5000
```

### 3. Start server

```bash
npm run dev
```

Backend runs at:
👉 [http://localhost:5000](http://localhost:5000)

---

## 🎨 Frontend Setup

### 1. Install dependencies

```bash
cd frontend
npm install
```

### 2. Create `.env`

```
REACT_APP_API_URL=http://localhost:5000/api
```

### 3. Start frontend

```bash
npm start
```

App runs at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Endpoints

| Method | Route              | Description                         |
| ------ | ------------------ | ----------------------------------- |
| GET    | `/api/new-chat`    | Create a new chat session           |
| GET    | `/api/sessions`    | Get all chat sessions               |
| GET    | `/api/session/:id` | Get messages for a session          |
| POST   | `/api/chat/:id`    | Send user message + get AI response |

---

## 🧠 How AI Works

1. User sends a message
2. Backend saves message → calls OpenRouter AI
3. AI returns markdown + a JSON table
4. Backend extracts table + saves bot response
5. Frontend renders message using:

   * Markdown
   * Code highlighting
   * Table UI

---

## 🗄 Database Schema (MongoDB)

### Session

```js
{
  title: String,
  timestamps: true
}
```

### Message

```js
{
  sessionId: ObjectId,
  sender: "user" | "bot",
  message: String,
  table: [{ key: String, value: Mixed }],
  timestamps: true
}
```

---

## 🛠 Running Full Project

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm start
```

Open:
👉 [http://localhost:3000](http://localhost:3000)

