import { createdata } from "../Controller/Book.controller.js";
import express from "express";

const router = express.Router();

router.post("/", createdata);

export default router;