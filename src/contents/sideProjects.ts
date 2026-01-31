import { Project } from "@/types";

export const sideProjects: Project[] = [
  {
    title: "Job Searching Platform for Vue.js Developers [2025.06]",
    description: `This website is aimed for Web developers to find developer jobs, 
        especially Vue jobs and for employers to hire web developers. JSON Web Server was used for backend, so actual job contents can not be browsed in the demo version.`,
    technologies: ["Vue.js", "Pinia", "JSON Server", "Tailwind CSS"],
    githubLink: "https://github.com/bekov28/jobs-website-vue",
    demoLink: "https://jobs-website-vue.netlify.app/",
    image: "/projects/vue.png",
    role: "",
    period: "",
  },
  {
    title: "Premium Granite E-commerce Shop [2025.07 ~ 2025.08]",
    description: `This Firebase-powered full stack website is an online store where users can sign up and look through the all types of valuables stones, such as Granite, Quartz, Marble, etc. Built in Vue.js, user roles and admin role is separated, where only the admin can add and edit the product list.`,
    technologies: ["Vue.js", "Pinia", "Firebase", "Bootstrap"],
    githubLink: "https://github.com/bekov28/granite-online-shop",
    demoLink: "https://graniteshop-29e1a.web.app/",
    image: "/projects/stone-website.png",
    role: "",
    period: "",
  },
  {
    title: "Campcar Renting Platform [2024.08 ~ 2024.09]",
    description: `This front-end-only website enables users to rent and buy campcars. 
        Built in React.js and JavaScript, this website features a user-friendly interface that allows users to rent and buy campcars. 
        Used tools in this project also include styled-components, MUI library, React Router and React Hooks`,
    technologies: ["React.js", "MUI", "Styled components", "React Router", "EmailJS"],
    githubLink: "https://github.com/bekov28/camper-project-react",
    demoLink: "https://campertestsite.netlify.app/",
    image: "/projects/camper.png",
    role: "",
    period: "",
  },
];
