import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [user, setUser] = useState(null);
  const [answers, setAnswers] = useState({});
  const [hasAttempted, setHasAttempted] = useState(false);
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Check login
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get("http://localhost:4001/islogin", {
          withCredentials: true,
        });
        if (res.data?.user) {
          setUser(res.data.user);
          checkUserAttempt(res.data.user.email);
        } else {
          toast.error("Please login to access the quiz!");
          window.location.href = "/login";
        }
      } catch {
        toast.error("Please login to access the quiz!");
        window.location.href = "/login";
      }
    };
    checkLogin();
  }, []);

  // ✅ Fetch quiz data
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const res = await axios.get("http://localhost:4001/Quizzes");
        const data = res.data;
        if (Array.isArray(data) && data.length > 0) {
          setQuizData(data);
        } else {
          toast.error("No quiz questions found!");
        }
      } catch (err) {
        console.error("Error fetching quiz:", err);
        toast.error("Error fetching quiz data.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuiz();
  }, []);

  // ✅ Check if user already attempted quiz
  const checkUserAttempt = async (email) => {
    try {
      const res = await axios.get("http://localhost:4001/quizresult/leaderboard");
      const existing = res.data.find((item) => item.email === email);
      if (existing) {
        setHasAttempted(true);
        setScore(existing.score);
        fetchLeaderboard();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ Fetch leaderboard
  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get("http://localhost:4001/quizresult/leaderboard");
      const sorted = res.data.sort((a, b) => b.score - a.score);
      setLeaderboard(sorted);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  // ✅ Handle answer selection
  const handleSelect = (questionIndex, option) => {
    setAnswers({ ...answers, [questionIndex]: option });
  };

  // ✅ Submit quiz
  const handleSubmit = async () => {
    if (!user) {
      toast.error("Please login first!");
      return;
    }

    let calculatedScore = 0;

    quizData.forEach((q, i) => {
      const correct = q.options.find((opt) => opt.isCorrect);
      if (answers[i] === correct?.en || answers[i] === correct?.hi) {
        calculatedScore++;
      }
    });

    try {
      await axios.post(
        "http://localhost:4001/quizresult/save",
        {
          userId: user.id,
          name: user.name,
          email: user.email,
          score: calculatedScore,
          total: quizData.length,
        },
        { withCredentials: true }
      );
      setScore(calculatedScore);
      setHasAttempted(true);
      toast.success("Quiz submitted successfully!");
      fetchLeaderboard();
    } catch (error) {
      toast.error(error.response?.data?.message || "You have already attempted!");
    }
  };

  // ✅ Loading
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <p className="text-gray-300 text-lg">Loading quiz...</p>
      </div>
    );

  // ✅ If user already attempted
  if (hasAttempted)
    return (
      <div className="quiz-result min-h-screen bg-gray-900 text-gray-100 py-12 px-6">
        <Toaster position="top-center" />
        <div className="max-w-xl mx-auto text-center bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">🏁 Quiz Result</h2>
          <p className="text-lg text-gray-300">You have already attempted the quiz.</p>
          <p className="text-2xl text-yellow-400 mt-4 font-semibold">
            Your Score: {score}
          </p>

          <h3 className="text-2xl text-blue-400 mt-10 mb-4">🏆 Leaderboard</h3>
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-inner">
            {leaderboard.map((l, i) => (
              <div
                key={i}
                className={`flex justify-between items-center py-2 px-3 mb-2 rounded-md transition-all ${
                  l.email === user.email
                    ? "bg-yellow-400 text-black font-semibold"
                    : "bg-gray-800 text-gray-200"
                }`}
              >
                <span>
                  {i + 1}. {l.name}
                </span>
                <span>{l.score} pts</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  // ✅ Quiz UI
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Toaster position="top-center" />
      <h2 className="text-3xl font-bold text-center text-blue-400 pt-10">
        🧠 Weekly Quiz
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="max-w-3xl mx-auto mt-8 bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg"
      >
        {quizData.map((q, i) => (
          <div key={i} className="mb-8">
            <h3 className="text-lg mb-3 text-gray-100">
              {i + 1}. {q.question_en}{" "}
              <span className="text-gray-400">({q.question_hi})</span>
            </h3>

            <div className="flex flex-col space-y-3">
              {q.options.map((opt, idx) => (
                <label
                  key={idx}
                  className={`px-4 py-2 rounded-md border border-gray-600 cursor-pointer transition-all ${
                    answers[i] === opt.en
                      ? "bg-blue-600 border-blue-400 text-white"
                      : "bg-gray-900 hover:bg-gray-700 text-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${i}`}
                    value={opt.en}
                    checked={answers[i] === opt.en}
                    onChange={() => handleSelect(i, opt.en)}
                    className="mr-2 accent-blue-500"
                  />
                  {opt.en}{" "}
                  {opt.hi && (
                    <span className="text-gray-400">({opt.hi})</span>
                  )}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="w-full mt-6 bg-green-600 hover:bg-green-700 py-3 rounded-md text-white font-semibold transition-all"
        >
          Submit Quiz
        </button>
      </form>
    </div>
  );
};

export default Quiz;
