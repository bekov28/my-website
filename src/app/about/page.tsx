"use client";

import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { pageTransition } from "@/utils/animation";
import { scaleIn } from "@/utils/animation";
import Image from "next/image";
import { certificates } from "@/contents/certificates";
import { useState } from "react";
import { Certificate } from "@/types";

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
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <div className="flex justify-center md: flex-col items-center  mb-10 gap-15 cursor-pointer">
          <Image
            src="/blog_image.png"
            alt="berd"
            width={300}
            height={250}
            className="rounded-2xl"
          ></Image>
          <div className="flex flex-col gap-3 ml-2">
            <p>
              Name: <span className="text-primary">Berd</span>
            </p>
            <p>
              Nationality: <span className="text-primary">Uzbekistan</span>
            </p>
            <p>
              Current Residence: <span className="text-primary">Seoul Guro-gu, South Korea</span>
            </p>
            <p>
              Visa Type: <span className="text-primary">F-5 (Permanent Resident)</span>
            </p>
            <p>
              Foreign Languages:{" "}
              <span className="text-primary">
                English (fluent), Korean (fluent), Russian (fluent), Uzbek (native)
              </span>
            </p>
            <p>
              Interests:{" "}
              <span className="text-primary">Web, Mobile, Web3, Backend, Algorithms</span>
            </p>
            <p>
              Hobby:
              <span className="text-primary"> Reading tech blogs, playing chess</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* bio section */}
      <motion.section className="mb-16" {...scaleIn}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate <span className="text-primary">Full Stack Developer</span> with
          overall 2 years of experience (of which 1 year is professional experience) in building
          modern web applications. With a strong foundation in both{" "}
          <span className="text-primary">frontend and backend</span> technologies, I create seamless
          user interfaces and robust server-side solutions.
        </p>
      </motion.section>

      {/* skills section */}
      <motion.section className="mb-16" {...scaleIn}>
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6 shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>HTML5 / CSS3</li>
              <li>JavaScript / TypeScript</li>
              <li>React.js / Next.js / Vue.js</li>
              <li>Tailwind CSS / SCSS</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6 shadow-md">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JWT Auth</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6 shadow-md">
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub / GitLab</li>
              <li>Material UI</li>
              <li>Postman / Swiper</li>
              <li>Axios / Multer</li>
              <li>Vite (Build tool)</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* experience section */}
      <section className="mb-16">
        <h2 className="section-title">Experience</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">coForward · 2025.03 ~ Present</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Built interactive and reusable user interface components with HTML5, CSS3, Vanilla
                JS and Vue.js
              </li>
              <li>
                Developed and designed the finance and trade web platform using JavaScript (ES6+)
                and implemented server-side functionality using Java, contributing to the
                development of RESTful APIs for front-end
              </li>
              <li>
                Collaborated with senior developers and designers to translate UI/UX wireframes into
                functional code
              </li>
              <li>
                Utilized version control with Git/GitLab for code management and gained experience
                in debugging and troubleshooting issues according the entire application stack
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">IT BootCamp Graduate</h3>
            <p className="text-primary mb-2">BeCoder · 2024.06 - 2024.12</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Created user-friendly and responsive web applications using React.js</li>
              <li>
                Integrated frontend and backend systems through APIs with Node.js using Express.js
                (MERN Stack)
              </li>
              <li>
                Worked with design tools, such as Figma and colloborated with other developers
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* education section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Master of Business Administration (MBA)</h3>
            <p className="text-primary mb-2">Dongseo University · 2016.09 - 2018.08</p>
            <p className="text-secondary">
              Studied marketing, finance, international trade, economics and business
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
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
              <p className="text-primary mb-2">{certificate.period}</p>
              <p className="text-secondary">{certificate.description}</p>
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
