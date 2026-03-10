"use client";
import { recentProjects } from "@/contents/recentProjects";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Project } from "@/types";

//Projects
const Projects = () => {
  const t = useTranslations("Projects");

  const [selectedImage, setSelectedImage] = useState<Project | null>(null); //set initial value of selected image
  const [isModalOpen, setIsModalOpen] = useState(false); //set initial value of modal open state

  //open the modal with the selected image
  const openModal = (project: Project) => {
    setSelectedImage(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">{t("projectsTitle")}</h1>
        <p className="text-lg text-secondary mt-4">{t("projectsSubtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recentProjects.map((project) => (
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
                priority
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{t(project.title)}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-justify mt-4 italic">
              {t(project.description)}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">{t(project.role)}</p>
            <ul className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
              {(t.raw(project.tasks) as string[]).map((task, index) => (
                <li key={index}>- {task}</li>
              ))}
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.period}</p>
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
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                target={project.githubLink ? "_blank" : "_self"}
                onClick={(e) => {
                  if (!project.githubLink) {
                    e.preventDefault();
                    alert("Sorry, not sharable...");
                  }
                }}
              >
                <FaGithub className="w-5 h-5" />
                <span>Code</span>
              </Link>

              <Link
                href={project.demoLink || "#"}
                target={project.demoLink ? "_blank" : "_self"}
                className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                onClick={(e) => {
                  if (!project.demoLink) {
                    e.preventDefault();
                    alert("Sorry, still under development...");
                  }
                }}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>Link</span>
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
    </section>
  );
};

export default Projects;
