import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4001/quizresult/leaderboard")
      .then((res) => setLeaders(res.data))
      .catch((err) => console.error("Error fetching leaderboard:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-center text-gray-500 mt-10">Loading leaderboard...</p>;

  if (leaders.length === 0)
    return <p className="text-center text-gray-500 mt-10">No quiz results yet.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">🏆 Leaderboard</h2>

      {leaders.map((l, i) => (
        <div
          key={i}
          className={`flex justify-between items-center py-3 px-4 mb-2 rounded-lg 
          ${i === 0 ? "bg-yellow-400 text-black font-semibold" :
            i === 1 ? "bg-gray-300 text-black font-semibold" :
            i === 2 ? "bg-orange-400 text-black font-semibold" :
            "bg-white/20 text-white"}`}
        >
          <span>{i + 1}. {l.name}</span>
          <span>{l.score} / {l.total}</span>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
