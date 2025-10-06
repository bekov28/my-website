import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Job Searching Platform for Vue.js Developers",
    description: `This website is aimed for Web developers to find developer jobs, 
    especially Vue jobs and for employers to hire web developers. JSON Web Server was used for backend, so actual job contents can not be browsed in the demo version.`,
    technologies: ["Vue.js", "Pinia", "JSON Server", "Tailwind CSS"],
    githubLink: "https://github.com/bekov28/jobs-website-vue",
    demoLink: "https://jobs-website-vue.netlify.app/",
    image: "/projects/vue.png",
  },
  {
    title: "Premium Granite Shop",
    description: `This website is aimed for Web developers to find developer jobs, 
    especially Vue jobs and for employers to hire web developers. JSON Web Server was used for backend, so actual job contents can not be browsed in the demo version.`,
    technologies: ["Vue.js", "Pinia", "JSON Server", "Tailwind CSS"],
    githubLink: "https://github.com/bekov28/granite-online-shop",
    demoLink: "https://graniteshop-29e1a.web.app/",
    image: "/projects/stone-website.png",
  },
];
