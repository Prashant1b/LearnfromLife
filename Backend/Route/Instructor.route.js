import express from "express";
import { getInstructor } from "../Controller/Instructor.controller.js";

const router = express.Router();

router.get("/", getInstructor);

export default router;