"use client";
import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import CategoriesProdect from "./_components/CategoriesProdect";
import Header from "@/componentsedit/layout/header/header";
import Footer from "@/componentsedit/layout/footer/footer";
import { API_ENDPOINTS } from "../../api/api";

export default function CategoriesProduct() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_ENDPOINTS.CAREGROES}`);
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

  return (
    <div>
      <Header />
      <CategoriesProdect categories={categories} />
      <Footer />
    </div>
  );
}
