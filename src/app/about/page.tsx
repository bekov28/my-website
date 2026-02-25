"use client";

import { FaCode, FaGraduationCap, FaLaptopCode, FaUserFriends } from "react-icons/fa";
import { motion } from "framer-motion";
import { pageTransition } from "@/utils/animation";
import { scaleIn } from "@/utils/animation";
import Image from "next/image";
import { certificates } from "@/contents/certificates";
import { useState } from "react";
import { Certificate } from "@/types";
import { techStack } from "@/contents/techStack";
import { IoLocationOutline } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { GiDiploma } from "react-icons/gi";

//About page ~~
const AboutPage = () => {
  const [selectedImage, setSelectedImage] = useState<Certificate | null>(null); //TypeScript Union type
  const [isModalOpen, setIsModalOpen] = useState(false); //changing the state using useState Hook

  const openModal = (certificate: Certificate) => {
    setSelectedImage(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <motion.div className="container max-w-7xl mx-auto py-20">
      <motion.div {...pageTransition}>
        <h1 className="text-4xl font-bold mb-12 text-center">
          <span>About me</span>
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center mb-10 gap-15 cursor-pointer">
          <Image
            src="/blog_image.png"
            alt="berd"
            width={400}
            height={400}
            className="rounded-2xl"
          ></Image>
          <div className="flex flex-col gap-2 ml-4">
            <p>
              Full Name: <span className="text-primary">Berdiyor Orzikulov</span>
            </p>
            <p>
              Nickname: <span className="text-primary">Berd (Korean: 버드)</span>
            </p>
            <p>
              Nationality: <span className="text-primary">Uzbekistan</span>
            </p>
            <p>
              Profession: <span className="text-primary">Full Stack Developer</span>
            </p>
            <p>
              Current Residence: <span className="text-primary">Seoul, South Korea</span>
            </p>
            <p>
              Visa Type: <span className="text-primary">F-5 (Permanent resident)</span>
            </p>
            <p>
              Foreign Languages:{" "}
              <span className="text-primary">English, Korean, Russian, Uzbek</span>
            </p>
            <p>
              Interests:{" "}
              <span className="text-primary">Web, Mobile, Web3, Backend, Algorithms</span>
            </p>
            <p>
              Hobby:
              <span className="text-primary"> Reading tech blogs, playing chess</span>
            </p>
            <p>
              MBTI:
              <span className="text-primary"> ESFJ (Extraverted, Sensing, Feeling, Judging)</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* bio section */}
      <motion.section className="mb-16" {...scaleIn}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate <span className="text-primary">Full Stack Developer</span> with 2+
          years of experience in building modern web applications. I also have 6 years of experience
          in Marketing/Operations and Customer Solutions in various South Korean fintech companies.
          With a strong foundation in both <span className="text-primary">Marketing and IT</span>{" "}
          technologies, I strive to create seamless user interfaces and robust server-side
          solutions.
        </p>
      </motion.section>

      {/* skills section */}
      <motion.section className="mb-16" {...scaleIn}>
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center items-center">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6 shadow-md">
            <div className="flex gap-3 justify-center items-center">
              <FaCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                HTML
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                CSS
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Tailwind
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                SCSS
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                JavaScript
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Vue.js
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Pinia
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                React.js
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                jQuery
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6 shadow-md">
            <div className="flex gap-3 justify-center items-center">
              <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Node.js
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Express.js
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                MongoDB
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                SQLite
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                JWT Auth
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Bcrypt.js
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Java (Spring-Boot)
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6 shadow-md">
            <div className="flex gap-3 justify-center items-center">
              <BsTools className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tools & DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Git
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                GitHub
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                GitLab
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Material UI
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Postman
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Swiper
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Vite (build tool)
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Slack
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Firebase
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Prisma (ORM)
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Docker
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6 shadow-md">
            <div className="flex gap-3 justify-center items-center">
              <FaUserFriends className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Problem Solving
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Teamwork
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Continuos Learning
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Adaptability
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Time Management
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30">
                Smooth Communication
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* experience section */}
      <section className="mb-16">
        <h2 className="section-title">Work Experience</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {techStack.map((position) => (
            <div
              key={position.position}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{position.position}</h3>
                <div className="text-primary mb-2 flex justify-between gap-4">
                  <p>{position.period}</p>
                  <div className="flex gap-1 justify-center items-center">
                    <IoLocationOutline />
                    <span>{position.location}</span>
                  </div>
                </div>
                <ul className="text-secondary space-y-2 list-disc list-inside">
                  {position.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 mt-2">
                  {position.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 mt-2 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* education section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <div className="flex gap-2 mb-2">
              <GiDiploma className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold mt-2">Full Stack Web Development BootCamp</h3>
            </div>
            <p className="text-primary mb-2">South Korea · 2024.06 - 2024.12</p>
            <p className="text-secondary">
              Full Stack Development with MERN Stack (MongoDB, Express, React, Node.js)
            </p>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <div className="flex gap-2 mb-2">
              <FaGraduationCap className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold mt-2">
                Master of Business Administration (MBA), South Korea
              </h3>
            </div>
            <p className="text-primary mb-2">Dongseo University · 2016.09 - 2018.08</p>
            <p className="text-secondary">
              Studied marketing, finance, international trade, economics and business
            </p>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <div className="flex gap-2 mb-2">
              <FaGraduationCap className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold mt-2">B.A in Finance & Economics, Uzbekistan</h3>
            </div>
            <p className="text-primary mb-2">Tashkent Financial Institute · 2011.09 - 2015.08</p>
            <p className="text-secondary">
              Major in Finance, Banking, Economics / Minor in Information Technlogies and English
              Language
            </p>
          </div>
        </div>
      </section>

      {/* Tech certificates/courses */}
      <section className="mb-16">
        <h2 className="section-title">IT courses/certificates</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md transition-transform duration-150 hover:scale-102"
            >
              <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
              <p className="text-primary mb-2">{certificate.period}</p>
              <p className="text-purple-400 italic">{certificate.description}</p>
              <ul className="text-secondary space-y-2 list-disc list-inside">
                <li>{certificate.details[0]}</li>
                <li>{certificate.details[1]}</li>
              </ul>
              <div
                className="flex justify-center mt-10 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openModal(certificate)}
              >
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
          {/* {Modal} */}
          <div className="relative max-w-4xl max-h-full">
            {isModalOpen && selectedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={closeModal}
                    className="cursor-pointer absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 z-10"
                  >
                    x
                  </button>
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    width={800}
                    height={600}
                    className="object-contain max-w-full max-h-full rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
export default AboutPage;
