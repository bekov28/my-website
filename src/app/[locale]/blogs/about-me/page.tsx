"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pageTransition } from "@/utils/animation";
import { useTranslations } from "next-intl";

const BlogPage = () => {
  const t = useTranslations("BlogPage");
  return (
    <motion.section
      className="container max-w-7xl mx-auto py-15 sm:text-lg md:text-xl"
      {...pageTransition}
    >
      <h1 className="text-4xl font-bold mb-4 text-center">{t("blogTitle")}</h1>
      <h2 className="py-15 text-base sm:text-lg md:text-xl leading-10 sm:m-3 text-justify">
        {t("blogText1")}
      </h2>
      <div className="flex justify-center sm:m-3">
        <Image
          src="/blog_image.png"
          alt="blog image"
          width={600}
          height={500}
          className="rounded-2xl"
        />
      </div>
      <h2 className="py-15 text-base sm:text-lg md:text-xl leading-10 sm:m-3 text-justify">
        {t("blogText2")}
      </h2>
    </motion.section>
  );
};

export default BlogPage;
