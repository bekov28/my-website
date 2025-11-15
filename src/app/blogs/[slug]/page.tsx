"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pageTransition } from "@/utils/animation";

const BlogPage = () => {
  return (
    <motion.section
      className="container max-w-7xl mx-auto py-15 sm:text-lg md:text-xl"
      {...pageTransition}
    >
      <h1 className="text-4xl font-bold mb-4 text-center">A bit about me...</h1>
      <h2 className="py-15 text-base sm:text-lg md:text-xl leading-10 sm:m-3 text-justify">
        Hello everyone! Glad to see you here in my website. In this very first post, I want to
        briefly introduce myself. So, my name is Berd and I am originally from Uzbekistan. I came to
        South Korea in 2015 as a sKorean Government Scholarship Program (GKS, formerly KGSP). As
        part of this scholarship program, I completed a 1-year Korean language course in Inha
        University and later got my Mastesr&apos;s degree in Dongseo University. Since then, I have
        worked in numerious small and middle sized Korean companies as a Marketing Manager, Business
        Developer, Customer Relationship Manager and as an Overseas Sales Assistant. But later at
        the end of 2023, I realized that I have passion for programming and started to teach myself
        coding. I also attended a Full Stack Web Developer Bootcamp, where I gained skills in
        JavaScript, React, TypeScript, Node.js for backend (MERN Stack). Since March 2025, I have
        been working in Seoul as a Full Stack Developer in a Korean IT company, called coForward.
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
        In coForward, I mainly focus on Front-end development, and my main tech stack in Front-end
        is Vanilla JS, Vue.js and jQuery. Besides front-end, I also do some backend with Java and
        Spring Boot (both Gradle and Maven tools) and automate the tasks. I like solving complex
        tasks and communicate with other developers and UX/UI designers to fully understand the
        business needs. My goal is to improve myself at least by 1% everyday, learn new technologies
        and finally contribute to the society as much as I could do. Wheather you have projects in
        mind or just for fun, feel free to drop me a message in LinkedIn and I will be more than
        happy to hear from you. See you on next blog!
      </h2>
    </motion.section>
  );
};

export default BlogPage;
