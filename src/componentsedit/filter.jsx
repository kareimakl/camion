import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Filter() {
  const [showPopup, setShowPopup] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [loading, setLoading] = useState(true);

  const router = useRouter();

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

  const handleFilter = () => {
    const query = new URLSearchParams();

    if (selectedCategory) query.append("category", selectedCategory);
    if (priceRange.min) query.append("minPrice", priceRange.min);
    if (priceRange.max) query.append("maxPrice", priceRange.max);

    router.push(`/filterpage?${query.toString()}`);
  };

  return (
    <div>
      <button
        className="absolute cursor-pointer right-12 top-1/2 -translate-y-1/2 p-2 rounded-full text-white"
        onClick={() => setShowPopup(!showPopup)}
      >
        <img src="/assets/icons/filter.svg" alt="Filter" />
      </button>

      {showPopup && (
        <div className="absolute min-w-[100%] top-16 right-0 bg-white p-4 rounded shadow-md z-50">
          <h2 className="font-bold mb-2">Filter Products</h2>

          <div className="mb-2">
            <div className="mb-2">
              <label className="block mb-1">Category:</label>
              <div className="  grid grid-cols-2 gap-2   max-h-60 overflow-y-auto">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className={`flex items-center gap-2 cursor-pointer p-1 border rounded ${
                      selectedCategory === cat.slug
                        ? "bg-[#e14a5c] text-[#fff] border-[#e14a5c]"
                        : ""
                    }`}
                    onClick={() => setSelectedCategory(cat.slug)}
                  >
                    <span className="text-xs line-clamp-1">{cat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-2">
            <label>Min Price:</label>
            <input
              type="number"
              className="border border-[#e14a5c] p-1 w-full"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.value })
              }
            />
          </div>

          <div className="mb-2">
            <label>Max Price:</label>
            <input
              type="number"
              className="border p-1 w-full"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: e.target.value })
              }
            />
          </div>

          <button
            onClick={handleFilter}
            className="bg-[#e14a5c] cursor-pointer text-white p-2 rounded w-full"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default Filter;
