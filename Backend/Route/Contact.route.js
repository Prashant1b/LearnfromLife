import { createdata } from "../Controller/Contact.controller.js";
import express from "express";

const router = express.Router();

router.post("/", createdata);

export default router;