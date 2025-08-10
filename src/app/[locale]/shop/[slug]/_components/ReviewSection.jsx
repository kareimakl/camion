"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ema Norton",
    date: "December 24, 2024",
    rating: 5,
    comment:
      "I recently bought a smartphone in the Woodmart store. I placed the order quickly and easily, the manager answered all my questions. Delivery was on time, the product was well packaged...",
  },
  {
    name: "Oliwia Whitley",
    date: "January 2, 2025",
    rating: 3,
    comment:
      "I was looking for a special gift for my friend... She said it was the best gift she had ever received. I was very happy that I could make her happy.",
  },
];

export default function ReviewSection() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className=" container  mx-auto p-4">
      <h2 className="text-center text-lg font-semibold">Customer Reviews</h2>
      <div className="text-center mt-2 text-4xl font-bold">4</div>
      <div className="flex justify-center items-center text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < 4 ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="ml-2 text-gray-600">2 reviews</span>
      </div>

      {/* Rating Distribution */}
      <div className="space-y-2 text-sm mb-6">
        {[5, 4, 3, 2, 1].map((star) => {
          const count = reviews.filter((r) => r.rating === star).length;
          const percent = (count / reviews.length) * 100;
          return (
            <div key={star} className="flex items-center gap-2">
              <span>
                {" "}
                <div className="flex justify-center items-center text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < 4 ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </span>
              <div className="flex-1 bg-gray-200 h-2 rounded">
                <div
                  className="bg-[#e14a5c] h-2 rounded"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <span>{count}</span>
            </div>
          );
        })}
      </div>

      {/* Add a Review */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Add a review</h3>
        <form className="space-y-3">
          <div>
            <label className="block mb-1 font-medium">
              Your rating <span className="text-[#e14a5c]">*</span>
            </label>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => {
                const value = i + 1;
                return (
                  <button
                    type="button"
                    key={value}
                    onClick={() => setRating(value)}
                    onMouseEnter={() => setHover(value)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <FaStar
                      className={`w-6 h-6 ${
                        value <= (hover || rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Your review <span className="text-[#e14a5c]">*</span>
            </label>
            <textarea
              className="w-full rounded-[35px] border border-[#e5e5e5]  p-2 px-4 h-48 "
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium">Name *</label>
            <input
              type="text"
              className="w-full rounded-[35px] border border-[#e5e5e5] p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email *</label>
            <input
              type="email"
              className="w-full rounded-[35px] border border-[#e5e5e5] p-2"
              required
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#e14a5c]  hover:bg-red-600 text-white px-4 py-2 rounded-[32px] "
          >
            Submit
          </button>
        </form>
      </div>

      {/* Display Reviews */}
      <div className="mt-8 border-t pt-4 space-y-6">
        <h3 className="text-lg font-semibold">
          2 reviews for Asus SDRW-08D2S-U
        </h3>
        <div className="grid md:grid-cols-2 gap-2 ">
          {reviews.map((review, i) => (
            <div key={i} className="border border-[#e5e5e5] p-3 rounded-[20px]">
              <div className="flex justify-between items-center mb-2">
                <strong>{review.name}</strong>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex items-center gap-1 mb-1 text-yellow-400">
                {[...Array(5)].map((_, j) => (
                  <FaStar
                    key={j}
                    className={
                      j < review.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
