import React from "react";
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";
import Blogs from "./_components/blogs";
import Join from "./_components/join";
import { allBlogs } from "./_data/allBlogs";
import { useLocale } from "next-intl";
export default function BlogPage() {
  const locale = useLocale();
  const posts = allBlogs[locale];

  return (
    <div>
      <Header />
      <Blogs posts={posts} />
      <Join />
      <Footer />
    </div>
  );
}
