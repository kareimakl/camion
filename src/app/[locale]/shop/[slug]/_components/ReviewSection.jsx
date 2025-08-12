"use client";
import "swiper/css";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../../../api/api";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const productId = searchParams.get("product");
  const savedToken = Cookies.get("token");
  const { slug } = useParams();
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
        console.log("Fetched reviews:", data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId, savedToken]);

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

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
    </div>
  );
}
