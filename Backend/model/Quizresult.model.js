import mongoose from "mongoose";

const quizResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  email: String,
  score: Number,
  total: Number,
  date: { type: Date, default: Date.now },
});

export default mongoose.model("QuizResult", quizResultSchema);
