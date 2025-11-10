import express from "express";
import { getCard } from "../Controller/Card.controller.js";

const router = express.Router();

router.get("/", getCard);

export default router;