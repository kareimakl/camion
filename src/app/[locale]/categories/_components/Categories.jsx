"use client";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "http://buckydrop.camion-app.com:3000/api/categories"
        );
        const data = await res.json();
        if (Array.isArray(data)) {
          setCategories(data);
          setLoading(false);
          console.log("Categories fetched successfully:", data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="w-full flex flex-col container gap-4 mt-10 m-auto">

        <div className="p-6 gap-4 grid md:grid-cols-10 grid-cols-3 m-auto min-h-auto ">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse shadow-xl md:w-[120px] md:h-[120px] w-[80px] h-[80px] bg-gray-300 rounded-full"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full container pb-2 mt-10 m-auto">

      <div className="grid grid-cols-3 md:grid-cols-10 gap-6 mt-6">
        {categories.map((category, i) => (
          <div
            key={category.id || i}
            className="flex flex-col items-center text-center gap-2"
          >
            <img
              src={
                category.image?.thumbnail ||
                category.image?.src ||
                "/assets/images/no-category.png"
              }
              alt={category.name || "Category"}
              className="md:w-[120px] md:h-[120px] w-[80px] h-[80px] rounded-full shadow-xl object-cover"
              loading="lazy"
            />
            <p className="md:text-sm text-xs font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
