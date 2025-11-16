import express from "express";
import {
  getSessions,
  createNewSession,
  getSessionById,
} from "../controllers/sessionController.js";

const router = express.Router();
router.get("/new-chat", createNewSession);
router.get("/sessions", getSessions);
router.get("/session/:id", getSessionById);

export default router;
