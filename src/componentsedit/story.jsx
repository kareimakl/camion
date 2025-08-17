"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { API_ENDPOINTS } from "../app/[locale]/api/api";
import Cookies from "js-cookie";

export default function Stories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeStory, setActiveStory] = useState(null);
  const savedToken = Cookies.get("token");

  const isVideo = (url) => {
    const videoExtensions = [".mp4", ".mov", ".avi", ".webm", ".mkv"];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.STORY}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${savedToken}`,
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        if (data) {
          setStories(data);
          console.log("Story fetched successfully:", data);
        }
      } catch (error) {
        console.error("Error fetching Story:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, []);

  const handleNext = () => {
    setActiveStory((prev) => {
      if (prev === stories.length - 1) {
        return null;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setActiveStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  // Auto next for images only
  useEffect(() => {
    if (activeStory === null) return;
    if (isVideo(stories[activeStory]?.mediaUrl)) return;

    const timer = setTimeout(() => {
      handleNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeStory]);

  if (loading)
    return (
      <div className="w-full flex flex-col justify-start items-start container gap-4 m-auto">
        <div className="py-4 gap-4 w-full flex overflow-x-auto">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse shadow-xl flex-shrink-0 md:w-[80px] md:h-[80px] w-[70px] h-[70px] bg-gray-300 rounded-full"
            ></div>
          ))}
        </div>
      </div>
    );

  return (
    <div className="flex overflow-x-auto justify-start container gap-6 py-4">
      {/* Thumbnails */}
      {stories?.map((story, index) => (
        <div
          key={story.id}
          className="w-20 h-20 rounded-full border-4 border-red-500 p-1 cursor-pointer overflow-hidden"
          onClick={() => setActiveStory(index)}
        >
          {isVideo(story.mediaUrl) ? (
            <video
              src={story.mediaUrl}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <Image
              src={story.mediaUrl}
              alt={`story-${index}`}
              width={80}
              height={80}
              className="rounded-full object-cover w-full h-full"
              unoptimized
            />
          )}
        </div>
      ))}

      {/* Story Viewer Modal */}
      <AnimatePresence>
        {activeStory !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-[80%] max-w-xl flex flex-col items-center gap-4">
              {isVideo(stories[activeStory].mediaUrl) ? (
                <video
                  src={stories[activeStory].mediaUrl}
                  autoPlay
                  className="w-full h-auto rounded-lg object-contain"
                  onEnded={handleNext}
                />
              ) : (
                <Image
                  src={stories[activeStory].mediaUrl}
                  alt={`story-${activeStory}`}
                  width={600}
                  height={600}
                  unoptimized
                  className="w-full h-auto rounded-lg object-contain"
                />
              )}

              <div className="text-center text-white mt-2">
                <h2 className="text-xl font-bold">
                  {stories[activeStory].title}
                </h2>
                <p className="text-sm opacity-80">
                  {stories[activeStory].description}
                </p>
              </div>

              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-4 cursor-pointer right-4 bg-white text-black rounded-full px-3 py-1 text-lg font-bold"
              >
                ✕
              </button>

              <button
                onClick={handlePrev}
                className="absolute top-1/2 cursor-pointer -left-10 transform -translate-y-1/2 bg-white text-black rounded-full px-2 py-2"
              >
                ◀
              </button>

              <button
                onClick={handleNext}
                className="absolute top-1/2 cursor-pointer -right-10 transform -translate-y-1/2 bg-white text-black rounded-full px-2 py-2"
              >
                ▶
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
