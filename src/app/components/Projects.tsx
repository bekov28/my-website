"use client";
import { recentProjects } from "@/contents/recentProjects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

//Projects
const Projects = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Check My Recent Projects</h1>
        <p className="text-lg text-secondary mt-4">
          For the full list of my projects, please kindly go to Projects section
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recentProjects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 transition-transform duration-150 hover:scale-102 cursor-pointer"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-justify mt-4 italic">
              {project.description}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">{project.role}</p>
            <ul className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
              {project.tasks.map((task) => (
                <li key={task}>- {task}</li>
              ))}
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.period}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
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
      </div>
    </section>
  );
};

export default Projects;
