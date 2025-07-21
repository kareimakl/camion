"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ProjectsGallery() {
  const t = useTranslations("HomePage.projects");

  const categories = [
    t("categories.all"),
    t("categories.informational"),
    t("categories.ecommerce"),
  ];

  const countries = [
    t("countries.all"),
    t("countries.eg"),
    t("countries.sa"),
    t("countries.ae"),
  ];
  const projects = [
    {
      id: 1,
      title: "مشروع 1",
      category: t("categories.informational"),
      categoryTwo: "السعودية",
      image: "/assets/images/project-1.avif",
    },
    {
      id: 2,
      title: "مشروع 2",
      category: t("categories.informational"),
      categoryTwo: "السعودية",
      image: "/assets/images/project-2.avif",
    },
    {
      id: 3,
      title: "مشروع 3",
      category: t("categories.informational"),
      categoryTwo: "السعودية",
      image: "/assets/images/project-3.avif",
    },
    {
      id: 4,
      title: "مشروع 4",
      category: t("categories.informational"),
      categoryTwo: "السعودية",
      image: "/assets/images/project-4.avif",
    },
    {
      id: 5,
      title: "مشروع 5",
      category: t("categories.informational"),
      categoryTwo: "السعودية",
      image: "/assets/images/project-5.avif",
    },
    {
      id: 6,
      title: "مشروع 6",
      category: t("categories.informational"),
      categoryTwo: "الإمارات",
      image: "/assets/images/project-6.avif",
    },
    {
      id: 7,
      title: "مشروع 7",
      category: t("categories.informational"),
      categoryTwo: "الإمارات",
      image: "/assets/images/project-7.avif",
    },
    {
      id: 8,
      title: "مشروع 8",
      category: t("categories.informational"),
      categoryTwo: "الإمارات",
      image: "/assets/images/project-8.avif",
    },
    {
      id: 9,
      title: "مشروع 9",
      category: t("categories.ecommerce"),
      categoryTwo: "الإمارات",
      image: "/assets/images/project-9.avif",
    },
    {
      id: 10,
      title: "مشروع 10",
      category: t("categories.ecommerce"),
      categoryTwo: "الإمارات",
      image: "/assets/images/project-10.avif",
    },
    {
      id: 11,
      title: "مشروع 11",
      category: t("categories.ecommerce"),
      categoryTwo: "الإمارات",
      image: "/assets/images/project-11.avif",
    },
    {
      id: 12,
      title: "مشروع 12",
      categoryTwo: "مصر",
      category: t("categories.ecommerce"),
      image: "/assets/images/project-12.avif",
    },
    {
      id: 13,
      title: "مشروع 13",
      categoryTwo: "مصر",
      category: t("categories.ecommerce"),
      image: "/assets/images/project-13.avif",
    },
    {
      id: 14,
      title: "مشروع 14",
      categoryTwo: "مصر",
      category: t("categories.ecommerce"),
      image: "/assets/images/project-14.avif",
    },
    {
      id: 15,
      title: "مشروع 15",
      categoryTwo: "مصر",
      category: t("categories.ecommerce"),
      image: "/assets/images/project-15.avif",
    },
    {
      id: 16,
      title: "16",
      categoryTwo: "مصر",
      category: t("categories.ecommerce"),
      image: "/assets/images/project-16.webp",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const handleClick = (id) => {
    if (window.innerWidth < 768) {
      setActiveProjectId(id === activeProjectId ? null : id);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchCategory =
      selectedCategory === categories[0] ||
      project.category === selectedCategory;
    const matchCountry =
      selectedCountry === countries[0] ||
      project.categoryTwo === selectedCountry;
    return matchCategory && matchCountry;
  });

  return (
    <section className="md:py-16 py-4 max-w-[1200px] m-auto px-4 text-center">
      <div className="flex w-full flex-col gap-2">
        <p className="mb-2 text-3xl font-bold text-[#2B00FF]">{t("title")}</p>
        <h2 className="text-sm mb-8">{t("description")}</h2>
      </div>

      {/* Categories Filter */}
      <div className="flex justify-center gap-4 my-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`md:px-4 cursor-pointer px-2 py-2 md:text-lg text-xs rounded font-semibold transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-[#2B00FF] text-white"
                : "bg-[#f1f2f3] text-black hover:bg-[#2B00FF] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Country Filter */}
      <div className="flex justify-center gap-4 my-4 flex-wrap">
        {countries.map((country) => (
          <button
            key={country}
            onClick={() => setSelectedCountry(country)}
            className={`md:px-4 px-2 py-2 cursor-pointer md:text-lg text-xs rounded font-semibold transition-all duration-200 ${
              selectedCountry === country
                ? "bg-[#2B00FF] text-white"
                : "bg-[#f1f2f3] text-black hover:bg-[#2B00FF] hover:text-white"
            }`}
          >
            {country}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => {
          const isActive = activeProjectId === project.id;

          return (
            <div
              key={project.id}
              onClick={() => handleClick(project.id)}
              className="overflow-hidden rounded-lg shadow-md group relative w-full md:h-[400px] h-[300px] cursor-pointer"
              style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)" }}
            >
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className={`w-full h-auto object-cover transition-transform duration-[3000ms] ease-in-out ${
                    isActive
                      ? project.id === 1
                        ? "translate-y-[-50px]"
                        : "translate-y-[-150px]"
                      : project.id === 1
                      ? "group-hover:translate-y-[-100px]"
                      : "group-hover:translate-y-[-300px]"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
