"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
export default function Blog({ posts }) {
  const t = useTranslations("Bolgs");
  return (
    <section className="py-12 px-4 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-6">
        {posts?.map((post) => (
          <div
            key={post?.id}
            className="bg-white relative rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link
              href={`/blogs/${post.id}-${encodeURIComponent(
                post.title.replace(/\s+/g, "-")
              )}`}
              className=" absolute w-full h-full "
            ></Link>
            <div className="relative w-full h-56">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
              <span className="absolute top-2 right-2 bg-[#2B00FF] text-white text-xs font-medium px-3 py-1 rounded-full">
                {post.badge}
              </span>
            </div>
            <div className="p-4  text-start">
              <h3 className="text-md font-bold text-[#2B00FF] mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-700 text-start leading-relaxed mb-4">
                {post.desc}
              </p>
              <Link
                href={`/blogs/${post.id}`}
                className="text-sm text-[#2B00FF] font-semibold"
              >
                {t("more")}&gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
