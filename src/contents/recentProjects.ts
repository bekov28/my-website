import { Project } from "@/types";

export const recentProjects: Project[] = [
  {
    title: "[Team Work] Shinhan Bank Foreign Exchange Trading Platform [2025.06 ~ Present]",
    description: `This Web-only Trading Platform of Shinhan Bank enables customers to register an account and start exchanging varius types of SWAP operations and other trading operations.`,
    technologies: ["Vue.js", "Java", "Spring-boot", "Maven"],
    githubLink: "",
    demoLink: "",
    image: "/projects/shinhan.png",
    role: "Role: Front-end developer, worked on the UI/UX part, added JS logic and integrated multiple APIs, implemented the front-end components of Account Widget, Service Information, Swap Point Rate",
    period: "[2025.06 ~ 2025.12]",
  },
  {
    title:
      "[Team Work] Eugene Securities US Stock Options Trading Platform (Web/Mobile) [2025.03 ~ 2025.05]",
    description: `This mobile trading application allows Korean customers to trade US stocks and options through long and short spreads and customers can also open an account for trading.`,
    technologies: ["SCSS", "JavaScript", "Java", "Spring-boot", "Gradle"],
    githubLink: "",
    demoLink: "https://www.eugenefutures.com/OptionsHub/index.html",
    image: "/projects/yujin.png",
    role: "Role: Front-end developer for UI/UX (contribution rate: 10%) with other 3 front-end developers in the small team. Collaborated with other senior developers and the design team to refine project requirements and fixed bugs.",
    period: "[2025.03 ~ 2025.06.15]",
  },
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
];
