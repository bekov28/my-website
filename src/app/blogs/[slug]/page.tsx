"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pageTransition } from "@/utils/animation";

const BlogPage = () => {
  return (
    <motion.section className="container max-w-7xl mx-auto py-15" {...pageTransition}>
      <h1 className="text-4xl font-bold mb-4 text-center">How I became a software developer?</h1>
      <h2 className="py-15 text-2xl leading-10">
        Hi, first of all, it is good to meet you in my personal website! Today I wanted to allocate
        some time to write how I became a software developer without a CS degree! Yes, you read
        correctly now- I dont have a Computer Science Degree. Hmm, perhaps after reading this you
        might not have been surprised at all, since nowadays it is common to see software developers
        without a degree. But, hey, I have to tell that I have a Master Degree in Business (MBA)
        from Dongseo University. At least I have a degree, right? Now, lets jump straight into
        today&apos;s topic where I would expain how I became a software developer in South Korea.
      </h2>
      <h2 className="text-2xl leading-10">
        Well, it has not been so long since I started coding. In fact, I started learning coding
        seriously since 2024 summer from HTML and CSS. Before that I had already been working for
        two years as a Marketing and Customer Service Specialist in one of the well-known fintech
        companies in Seoul. In fact, when I worked as a Marketing staff that time, I was not just
        enjoying the work and simly didnt see any self-development in myself. This was the reason
        when I decided to enroll an online coding bootcamp. A friend of mine (Uzbek) who was a
        senior software engineer in a Korean company had opened an online coding course where he was
        willing to teach coding from scratch. That was the moment that I realized I need to enroll
        and be really serious about my career.
      </h2>
      <div className="flex justify-center">
        <Image
          src="/blog_image.png"
          alt="blog image"
          width={600}
          height={500}
          className="mt-15 rounded-2xl"
        />
      </div>

      <h2 className="py-15 text-2xl leading-10">
        So, I learned coding from very basics in this IT bootcamp. After finishing HTML and CSS and
        did some small projects, we then moved to JavaScript where I was simply blown away. It was
        JavaScript that the real programming language we needed to deal with. First, it didnt seem
        to be difficult as much as we didnt spend much time on the language and within two weeks we
        started learning how to code in React.js. We were around 6-7 ambitious students in the class
        and already started doing a small-medium project in React.js to better understand the JS
        library (some people confuse that React.js is the framework). But simply, I dont recommend
        anyone who just started learning JavaScript to jump to frameworks too quickly. I would say
        spend at least 2-3 months to understand JavaScript fundamentals, do some small projects in
        vanialla JS and then you might start learning React.js, Vue or other frameworks. So, after
        finishing the project within 1 month, we moved to TypeScript and then Node.js and MongoDB
        for backend. And at the end of year, after 6months of study, we finished the course and
        finally started to apply for jobs (to be continued...).
      </h2>
    </motion.section>
  );
};

export default BlogPage;
