import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router";

function FreeContent() {
  const [card, setcard] = useState([]);

  useEffect(() => {
    const getcard = async () => {
      try {
        const res = await axios.get("http://localhost:4001/Card");
        const freeCards = res.data.filter(
          (card) => card.category.toLowerCase() === "free"
        );
        setcard(freeCards);
      } catch (error) {
        console.log(error);
      }
    };
    getcard();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto  px-4 md:px-20 bg-gray-900 text-gray-100 py-10  shadow-inner">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-bold text-3xl pb-3 text-white">
          What You’ve Never Heard
        </h1>
        <p className="text-gray-400 leading-relaxed">
          Every famous personality has a journey filled with challenges, doubts,
          and moments that could have stopped them. What sets them apart is
          their resilience, determination, and the courage to keep moving
          forward. Behind every achievement lies a story of hard work,
          sacrifices, and lessons learned from failure. Let their journey inspire
          you to push beyond your limits and chase your dreams relentlessly.
        </p>
      </div>

      {/* Scrollable Cards */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "16px",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="mt-8 hide-scrollbar"
      >
        {card.length > 0 ? (
          card.map((item) => (
            <div
              key={item.number}
              style={{
                flex: "0 0 auto",
                width: "100%",
                maxWidth: "350px",
                scrollSnapAlign: "start",
              }}
              className="sm:w-[48%] md:w-[30%]"
            >
              <Card {...item} />
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Loading free content...</p>
        )}
      </div>
    </div>
  );
}

export default FreeContent;
