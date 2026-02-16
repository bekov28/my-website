import { Project } from "@/types";

export const recentProjects: Project[] = [
  {
    title: "[Team Work] Shinhan Bank Foreign Exchange Trading Platform (Web Project)",
    description: `Foreign Exchange Trading Platform for Shinhan Bank that enables customers to register an account and start making transactions through varius types of Swap and Forward operations.`,
    technologies: ["Vue.js", "Java", "Spring-boot", "Maven"],
    githubLink: "",
    demoLink: "https://efx.shinhan.com/",
    image: "/projects/shinhan.png",
    role: "[Front-end developer] - 15% Contribution Rate",
    tasks: [
      "Developed reusable UI components for web trade application using JavaScript, Vue.js and Vite, reducing frontend development time for new features by 30%",
      "Translated Figma designs into functional codes",
      "Integrated RESTful APIs and managed state by Pinia to provide seemless data flow",
      "Managed version control using Git/GitLab",
      "Collaborated with Backend Engineers to define API contracts and data structures, ensuring full stack integration",
    ],
    period: "[2025.06 - 2026.02]",
  },
  {
    title: "[Team Work] Eugene Securities US Stock Options Trading Platform (Web/Mobile)",
    description: `This mobile trading application allows Korean customers to trade US stocks and options through long and short spreads and customers can also open an account for trading.`,
    technologies: ["SCSS", "JavaScript", "Java", "Spring-boot", "Gradle"],
    githubLink: "",
    demoLink: "https://www.eugenefutures.com/OptionsHub/index.html",
    image: "/projects/yujin.png",
    role: "[Front-end developer] - 10% Contribution Rate",
    tasks: [
      "Collaborated with other senior developers and the design team to refine project requirements",
      "Refactored the existent code base and fixed bugs",
    ],
    period: "[2025.03 - 2025.06.15]",
  },
  {
    title: "Job Searching Platform for Vue.js Developers (Web Project)",
    description: `This website is aimed for Web developers to find Vue.js jobs and for employers to hire web developers. JSON Web Server was used for backend, so actual job contents can not be browsed in the demo version.`,
    technologies: ["Vue.js", "Pinia", "JSON Server", "Tailwind CSS"],
    githubLink: "https://github.com/bekov28/jobs-website-vue",
    demoLink: "https://jobs-website-vue.netlify.app/",
    image: "/projects/vue.png",
    role: "[Full Stack Developer]",
    tasks: [],
    period: "[2025.06]",
  },
];
