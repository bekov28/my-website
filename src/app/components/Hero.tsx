"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animation";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "and Customer Solutions Manager",
        "Glad to see you here!",
      ],
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  });

  return (
    <section className="py-28 container max-w-7xl px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="flex flex-col items-center mb-4"
          {...scaleIn}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/profile_img.jpg"
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary cursor-pointer"
          />
        </motion.div>

        <div className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I&apos;m <span className="text-primary">Berd</span>
        </div>

        <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          {" "}
          <span ref={el}></span>
        </div>

        <motion.div
          className="flex justify-center space-x-4 mb-8"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="https://github.com/bekov28"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/berdiyor-orzikulov/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://t.me/bekov28"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaTelegram />
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/projects"
            className="bg-primary inline-block w-[60%] md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
          >
            {t("View Projects")}
          </Link>

          <Link
            href="/contact"
            className="bg-gray-500 inline-block w-[60%] md:w-auto text-white hover:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
