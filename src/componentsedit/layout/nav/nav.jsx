"use client";
import { API_ENDPOINTS } from "@/app/[locale]/api/api";
import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.CAREGROES}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setCategories(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex gap-4 overflow-x-auto py-2">
      {loading
        ? Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-5 w-20 bg-gray-200 rounded-full dark:bg-gray-400 animate-pulse"
            ></div>
          ))
        : categories
            .slice(0,6)
            .map((category, i) => (
              <NavItem
                key={category.id || i}
                to={`/categories/${category?.slug}`}
                title={category.name}
              />
            ))}
    </div>
  );
}

function NavItem({ title, to }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-iconHover transition whitespace-nowrap">
      <Link href={to}>{title}</Link>
      {/* <MdKeyboardArrowDown /> */}
    </div>
  );
}
