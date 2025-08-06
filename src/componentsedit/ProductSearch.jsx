"use client";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { API_ENDPOINTS } from "../app/[locale]/api/api";
import { Link } from "@/i18n/navigation";

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `${API_ENDPOINTS.PRODUCT}?search=${encodeURIComponent(searchTerm)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      setResults(data.products || []);
      console.log("Search results:", data.products);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (query.trim()) fetchProducts(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        fetchProducts(query);
      } else {
        setResults([]);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="w-full max-w-xl bg-[#fff] rounded-full relative">
      <input
        type="text"
        placeholder="Search for products"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="absolute cursor-pointer bg-[#e14a5c] right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-white"
      >
        <FiSearch />
      </button>
      <button className="absolute cursor-pointer right-12 top-1/2 -translate-y-1/2 p-2 rounded-full text-white">
        <img src="/assets/icons/filter.svg" alt="" />
      </button>

      {loading && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg p-4 text-center">
          Loading...
        </div>
      )}
      {!loading && query && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg p-4 text-center">
          Not found
        </div>
      )}

      {results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg max-h-64 overflow-y-auto z-50">
          {results.map((item) => (
            <Link href={`/shop/${item.id}`} key={item.id}>
              <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <img
                  src={
                    item.images?.[0]?.thumbnail || "/assets/images/no-image.png"
                  }
                  alt={item?.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800 line-clamp-1">
                    {item?.name}
                  </span>
                  <span
                    className="text-xs text-gray-500"
                    dangerouslySetInnerHTML={{ __html: item.price_html }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
