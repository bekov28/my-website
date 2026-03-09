"use client";

import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { pageTransition } from "@/utils/animation";
import { sideProjects } from "@/contents/sideProjects";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Project } from "@/types";

const ProjectPage = () => {
  const t = useTranslations("ProjectPage");

  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //select the image when the user clicks on the project card and open the modal
  const openModal = (project: Project) => {
    setSelectedImage(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <motion.div className="container max-w-7xl mx-auto py-20" {...pageTransition}>
      <h1 className="text-4xl font-bold mb-4 text-center">{t("teamProjects")}</h1>
      <p className="text-lg text-secondary mb-16 text-center">
        {" "}
        <span>{t("teamProjectsDesc")}</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 transition-transform duration-150 hover:scale-102 cursor-pointer"
          >
            <div
              className="relative aspect-video mb-4 rounded-lg overflow-hidden"
              onClick={() => openModal(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-justify">{t(project.title)}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify mt-4">
              {t(project.description)}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <Link
                href={project.githubLink || "#"}
                target={project.githubLink ? "_blank" : "_self"}
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                onClick={(e) => {
                  if (!project.githubLink) {
                    e.preventDefault();
                    alert("Sorry, not sharable... (공개 제한)");
                  }
                }}
              >
                <FaGithub className="w-5 h-5" />
                <span>{t("code")}</span>
              </Link>

              <Link
                href={project.demoLink || "#"}
                target={project.demoLink ? "_blank" : "_self"}
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                onClick={(e) => {
                  if (!project.demoLink) {
                    e.preventDefault();
                    alert("Sorry, still under development...(개발 중)");
                  }
                }}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>{t("link")}</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-4 text-center mt-24">{t("sideProjects")}</h1>
      <p className="text-lg text-secondary mb-16 text-center">
        <span>{t("sideProjectsDesc")}</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sideProjects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 transition-transform duration-150 hover:scale-102 cursor-pointer"
          >
            <div
              className="relative aspect-video mb-4 rounded-lg overflow-hidden"
              onClick={() => openModal(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-justify">{t(project.title)}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify mt-4">
              {t(project.description)}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-sm font-medium border bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800 dark:bg-opacity-20 dark:border-opacity-30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <Link
                href={project.githubLink || "#"}
                target={project.githubLink ? "_blank" : "_self"}
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                onClick={(e) => {
                  if (!project.githubLink) {
                    e.preventDefault();
                    alert("Sorry, not sharable... (공개 제한)");
                  }
                }}
              >
                <FaGithub className="w-5 h-5" />
                <span>{t("code")}</span>
              </Link>

              <Link
                href={project.demoLink || "#"}
                target={project.demoLink ? "_blank" : "_self"}
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                onClick={(e) => {
                  if (!project.demoLink) {
                    e.preventDefault();
                    alert("Sorry, still under development...(개발 중)");
                  }
                }}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>{t("link")}</span>
              </Link>
            </div>
          </article>
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
    </motion.div>
  );
};
export default ProjectPage;
