"use client";
import { useState } from "react";
import Image from "next/image";

const categories = ["الكل", "المواقع التعريفية", "المتاجر الإلكترونية"];
const categoriesTwo = ["الكل", "مصر", "السعودية", "الإمارات"];

const projects = [
  {
    id: 1,
    title: "مشروع 1",
    category: "المواقع التعريفية",
    categoryTwo: "مصر",
    image: "/assets/images/project-1.avif",
  },
  {
    id: 2,
    title: "مشروع 2",
    category: "المتاجر الإلكترونية",
    categoryTwo: "السعودية",
    image: "/assets/images/project-2.avif",
  },
  {
    id: 3,
    title: "مشروع 3",
    category: "المتاجر الإلكترونية",
    categoryTwo: "الإمارات",
    image: "/assets/images/project-3.avif",
  },
  {
    id: 4,
    title: "مشروع 4",
    category: "المتاجر الإلكترونية",
    categoryTwo: "الإمارات",
    image: "/assets/images/project-4.avif",
  },
  {
    id: 5,
    title: "مشروع 5",
    category: "المتاجر الإلكترونية",
    categoryTwo: "السعودية",
    image: "/assets/images/project-5.avif",
  },
  {
    id: 6,
    title: "مشروع 6",
    category: "المتاجر الإلكترونية",
    categoryTwo: "مصر",
    image: "/assets/images/project-6.avif",
  },
  {
    id: 7,
    title: "مشروع 7",
    category: "المتاجر الإلكترونية",
    categoryTwo: "مصر",
    image: "/assets/images/project-7.avif",
  },
  {
    id: 8,
    title: "مشروع 8",
    category: "المتاجر الإلكترونية",
    categoryTwo: "مصر",
    image: "/assets/images/project-8.avif",
  },
  {
    id: 9,
    title: "مشروع 5",
    category: "المتاجر الإلكترونية",
    categoryTwo: "السعودية",
    image: "/assets/images/project-5.avif",
  },
  {
    id: 10,
    title: "مشروع 6",
    category: "المتاجر الإلكترونية",
    categoryTwo: "مصر",
    image: "/assets/images/project-6.avif",
  },
  {
    id: 11,
    title: "مشروع 7",
    category: "المتاجر الإلكترونية",
    categoryTwo: "مصر",
    image: "/assets/images/project-7.avif",
  },
  {
    id: 12,
    title: "مشروع 8",
    category: "المتاجر الإلكترونية",
    categoryTwo: "مصر",
    image: "/assets/images/project-8.avif",
  },
];

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [selectedCategoryTwo, setSelectedCategoryTwo] = useState("الكل");

  const filteredProjects = projects.filter((project) => {
    const matchCategory =
      selectedCategory === "الكل" || project.category === selectedCategory;
    const matchCategoryTwo =
      selectedCategoryTwo === "الكل" ||
      project.categoryTwo === selectedCategoryTwo;
    return matchCategory && matchCategoryTwo;
  });

  return (
    <section className="md:py-16 py-4 max-w-[1200px] m-auto px-4 text-center">
      <div className="flex w-full   flex-col gap-2">
        <p className="mb-2 text-3xl font-bold text-[#2B00FF]">أعمالنا</p>
        <h2 className="text-sm  mb-8">
          لأننا الأفضل في هذا المجال يكفي أن تجرب اختبار الأداء لسابقة اعمالنا
          لتري النتائج المبهرة…
        </h2>
      </div>

      <div className="flex  justify-center gap-4 my-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`md:px-4 px-2  py-2 md:text-lg text-xs   hover:bg-[#2B00FF] hover:text-[#fff] cursor-pointer rounded  font-semibold  transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-[#2B00FF] text-white"
                : "bg-[#f1f2f3] text-black "
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex  justify-center gap-4 my-4">
        {categoriesTwo.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategoryTwo(cat)}
            className={`md:px-4 px-2 py-2 md:text-lg text-xs hover:bg-[#2B00FF] hover:text-[#fff] cursor-pointer rounded font-semibold transition-all duration-200 ${
              selectedCategoryTwo === cat
                ? "bg-[#2B00FF] text-white"
                : "bg-[#f1f2f3] text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div
            style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)" }}
            key={project.id}
            className="overflow-hidden rounded-lg shadow-md group relative w-full md:h-[400px] h-[300px]"
          >
            <div className="w-full h-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={1000}
                className={`w-full h-auto block transition-transform object-cover duration-[3000ms] ease-in-out  ${
                  project?.id == 1
                    ? "group-hover:translate-y-[-100px]"
                    : "group-hover:translate-y-[-400px]"
                } `}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
