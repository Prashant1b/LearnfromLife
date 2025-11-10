import QuizResult from "../model/Quizresult.model.js";

export const saveResult = async (req, res) => {
  try {
    const { userId, name, email, score, total } = req.body;

    const alreadyGiven = await QuizResult.findOne({ userId });
    if (alreadyGiven) {
      return res.status(400).json({ message: "User already attempted the quiz." });
    }

    const result = new QuizResult({ userId, name, email, score, total });
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const topScores = await QuizResult.find().sort({ score: -1 }).limit(10);
    res.status(200).json(topScores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
