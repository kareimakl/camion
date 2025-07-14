"use client";
import { useState } from "react";
import Image from "next/image";

const categories = ["الكل", "المواقع التعريفية", "المتاجر الإلكترونية"];

const projects = [
  {
    id: 1,
    title: "مشروع 1",
    category: "المواقع التعريفية",
    image: "/assets/images/project-1.avif",
  },
  {
    id: 2,
    title: "مشروع 2",
    category: "المتاجر الإلكترونية",
    image: "/assets/images/project-2.avif",
  },
  {
    id: 3,
    title: "مشروع 3",
    category: "المواقع التعريفية",
    image: "/assets/images/project-3.avif",
  },
  {
    id: 4,
    title: "مشروع 4",
    category: "المتاجر الإلكترونية",
    image: "/assets/images/project-4.avif",
  },
  {
    id: 5,
    title: "مشروع 5",
    category: "المتاجر الإلكترونية",
    image: "/assets/images/project-5.avif",
  },
  {
    id: 6,
    title: "مشروع 6",
    category: "المتاجر الإلكترونية",
    image: "/assets/images/project-6.avif",
  },
  {
    id: 7,
    title: "مشروع 7",
    category: "المتاجر الإلكترونية",
    image: "/assets/images/project-7.avif",
  },
  {
    id: 8,
    title: "مشروع 8",
    category: "المتاجر الإلكترونية",
    image: "/assets/images/project-8.avif",
  },
];

export default function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [activeProjectId, setActiveProjectId] = useState(null);

  const filteredProjects =
    selectedCategory === "الكل"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleClick = (id) => {
    if (window.innerWidth < 768) {
      setActiveProjectId(id === activeProjectId ? null : id); // Toggle
    }
  };

  return (
    <section className="md:py-16 py-4 max-w-[1200px] m-auto px-4 text-right">
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div className="flex w-full md:-translate-y-8  flex-col gap-2">
          <p className="mb-2">أعمالنا</p>
          <h2 className="text-3xl font-bold mb-8">
            نقوم بتنفيذ <span className="text-[#2B00FF]">مشاريع مميزة</span>
            <br />
            تلبي تطلعات عملائنا...
          </h2>
        </div>
        <p>
          نفخر في تاج هاوس كشركة برمجة بإنجازاتنا في مجالات الحلول البرمجية
          وتطوير المواقع الإلكترونية، حيث قدمنا خدماتنا لمجموعة متنوعة من
          العملاء في◊
        </p>
        <p>
          مصر والعالم العربي، مما ساعدهم على تحقيق نمو ملموس في أعمالهم الرقمية.
        </p>
      </div>

      <div className="flex justify-center gap-4 my-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`md:px-4 px-2  py-2 md:text-2xl text-xs hover:bg-[#2B00FF] hover:text-[#fff] cursor-pointer rounded font-semibold border transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-[#2B00FF] text-white"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => {
          const isActive = activeProjectId === project.id;

          return (
            <div
              key={project.id}
              onClick={() => handleClick(project.id)}
              style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.5)" }}
              className="overflow-hidden rounded-lg shadow-md group relative w-full md:h-[400px] h-[300px] cursor-pointer"
            >
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={1200}
                  className={`w-full h-auto block object-cover transition-transform duration-[3000ms] ease-in-out
  ${
    isActive
      ? project.id === 1
        ? "translate-y-[-50px]"
        : "translate-y-[-150px]"
      : project.id === 1
      ? "group-hover:translate-y-[-100px]"
      : "group-hover:translate-y-[-300px]"
  }
`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
