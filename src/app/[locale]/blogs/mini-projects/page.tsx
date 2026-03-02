"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/utils/animation";

const JSProjectBlog = () => {
  return (
    <motion.section
      className="container max-w-7xl mx-auto py-15 sm:text-lg md:text-xl"
      {...pageTransition}
    >
      <h1 className="text-4xl font-bold mb-4 text-center">
        How I made 30 JavaScript Projects in 30 Days...(Coming soon)
      </h1>
      <h2 className="py-15 text-base sm:text-lg md:text-xl leading-10 sm:m-3 text-justify"></h2>
      <div className="flex justify-center sm:m-3"></div>
      <h2 className="py-15 text-base sm:text-lg md:text-xl leading-10 sm:m-3 text-justify"></h2>
    </motion.section>
  );
};

export default JSProjectBlog;
