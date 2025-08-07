"use client";
import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import CategoriesProdect from "./_components/CategoriesProdect";
import Header from "@/componentsedit/layout/header/header";
import Footer from "@/componentsedit/layout/footer/footer";

export default function CategoriesProduct() {
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

  return (
    <div>
      <Header />
      <CategoriesProdect categories={categories} />
      <Footer />
    </div>
  );
}
