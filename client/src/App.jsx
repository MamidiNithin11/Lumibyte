import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChatPage from './pages/ChatPage';

export default function App() {
return (    
  <BrowserRouter>
<div className="min-h-screen">
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat/:sessionId" element={<ChatPage />} />
    </Routes>
</div>
  </BrowserRouter>
);
}   