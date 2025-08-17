"use client";
import "swiper/css";
import Cookies from "js-cookie";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../../api/api";
import { FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();
  const savedToken = Cookies.get("token");
  const { slug } = useParams(); // product id from URL

  // Fetch Reviews
  useEffect(() => {
    if (!slug) return;

    const fetchReviews = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.REVIEWS}?product=${slug}`, {
          headers: {
            ...(savedToken && { Authorization: `Bearer ${savedToken}` }),
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        toast.error("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [slug, savedToken]);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  // Submit Review
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!savedToken) {
      toast.warn("You must be logged in to add a review");
      setTimeout(() => {
        router.push("/auth/signup");
      }, 2000);
      return;
    }

    if (!name || !email || rating === 0 || reviewText.trim() === "") {
      toast.error("Please fill all fields (name, email, rating, review)");
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(API_ENDPOINTS.REVIEWS, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${savedToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: Number(slug), 
          review: reviewText,
          reviewer: name,
          reviewer_email: email,
          rating,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit review");

      const newReview = await res.json();
      setReviews((prev) => [newReview, ...prev]);
      setRating(0);
      setReviewText("");
      setName("");
      setEmail("");
      toast.success(" Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error(" Error submitting review");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-6">
        <div className="animate-spin h-6 w-6 border-4 border-pink-500 border-t-transparent rounded-full mx-auto mb-2"></div>
        Loading reviews...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-center text-lg font-semibold">Customer Reviews</h2>
      <div className="text-center mt-2 text-4xl font-bold">
        {averageRating.toFixed(1)}
      </div>
      <div className="flex justify-center items-center text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={
              i < Math.round(averageRating)
                ? "text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
        <span className="ml-2 text-gray-600">
          {reviews.length} review{reviews.length !== 1 && "s"}
        </span>
      </div>

      {/* Reviews */}
      {reviews.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No reviews yet</p>
      ) : (
        <div className="mt-8 border-t pt-4 space-y-6">
          <h3 className="text-lg font-semibold">
            {reviews.length} review{reviews.length !== 1 && "s"} for this
            product
          </h3>
          <div className="grid md:grid-cols-2 gap-2">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="border border-[#e5e5e5] p-3 rounded-[20px]"
              >
                <div className="flex justify-between items-center mb-2">
                  <strong>{review.reviewer}</strong>
                  <span className="text-sm text-gray-500">
                    {review.formatted_date_created}
                  </span>
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
                <div
                  className="text-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: review.review }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Review */}
      <div className="mt-10 border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Add a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            className="w-full border rounded-lg p-2 text-sm"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            className="w-full border rounded-lg p-2 text-sm"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Rating */}
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                onClick={() => setRating(i + 1)}
                className={`cursor-pointer ${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Review Text */}
          <textarea
            className="w-full border rounded-lg p-2 text-sm"
            rows="4"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />

          <button
            type="submit"
            disabled={submitting}
            className="bg-[#e14a5c] cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-[#d83c4f] disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={4000} theme="colored" />
      </div>
    </div>
  );
}
