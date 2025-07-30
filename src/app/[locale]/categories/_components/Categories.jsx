"use client";
import { useEffect, useState } from "react";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [Loding, IsLoding] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "http://54.162.75.209:3000/api/buckydrop/categories"
        );
        const data = await res.json();
        if (data.success) {
          setCategories(data.data);
          IsLoding(false);
          // console.log("Categories fetched successfully:", data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return Loding ? (
    <div className="p-6 container gap-4  grid md:grid-cols-6  grid-cols-3 m-auto  min-h-auto ">
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden  shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
      <div className="animate-pulse md:flex hidden shadow-xl md:w-[120px] md:h-[120px] w-[60px] h-[60px] bg-gray-300 rounded-full"></div>
    </div>
  ) : (
    <div>
      {/* Hot Categories */}
      <div className="w-full container pb-2 mt-10 m-auto">
        <div className="flex flex-col h-full gap-10">
          <div className="grid md:grid-cols-6 grid-cols-3 h-full gap-2">
            {categories?.map((category, i) => (
              <div
                key={i + "b"}
                className="flex flex-col items-center text-center gap-4"
              >
                <img
                  src={category.imageUrl}
                  alt={category.categoryName}
                  className="md:w-[120px] md:h-[120px] w-[60px] h-[60px] rounded-full shadow-xl object-cover"
                />
                <p className="md:text-sm text-xs font-semibold">{category.categoryName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
