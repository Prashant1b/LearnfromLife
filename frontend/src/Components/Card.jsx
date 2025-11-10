import React, { useState } from "react";

function Card({ name, title, price, category, image, description }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="bg-gray-900 border border-gray-800 mb-8 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200 text-gray-100">
        <figure>
          <img
            src={image}
            alt={name}
            className="w-full h-56 object-cover opacity-90"
          />
        </figure>
        <div className="p-4">
          <h2 className="font-semibold text-lg flex justify-between items-center">
            <span className="text-white">{name}</span>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
              {category}
            </span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">{title}</p>

          <div className="flex justify-between mt-4 items-center">
            <span className="text-blue-400 font-semibold">
              {price === "0" ? "Free" : `$${price}`}
            </span>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded-md transition duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-3xl p-6 relative overflow-y-auto max-h-[90vh] text-gray-100 border border-gray-700 shadow-xl">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={image}
              alt={name}
              className="w-full object-contain mb-4 rounded"
            />

            {/* Text content */}
            <h2 className="font-bold text-2xl mb-2 text-white">{name}</h2>
            <p className="text-gray-400 mb-2">{title}</p>
            <p className="text-blue-400 font-semibold mb-4">
              {price === "0" ? "Free" : `$${price}`}
            </p>

            {/* Description */}
            <div className="text-gray-300 whitespace-pre-line">
              {description?.english && (
                <p className="mb-4">{description.english}</p>
              )}
              {description?.hindi && <p>{description.hindi}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
