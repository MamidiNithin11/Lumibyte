import express from "express";

import { handleChat } from "../controllers/chatController.js";

const router = express.Router();
router.post("/chat/:id", handleChat);
export default router;
