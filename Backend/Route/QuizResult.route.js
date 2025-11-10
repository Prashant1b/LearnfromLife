import express from "express";
import { saveResult, getLeaderboard } from "../Controller/QuizResult.controller.js"

const router = express.Router();

router.post("/save", saveResult);
router.get("/leaderboard", getLeaderboard);

export default router;
