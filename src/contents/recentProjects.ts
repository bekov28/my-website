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
      "Translated Figma designs into functional code",
      "Integrated RESTful APIs and managed state by Pinia to provide seemless data flow",
      "Optimized application performance by utilizing ES6 Promises and Async/Await for asynchronous data fetching, reducing API response handling time by 15% compared to traditional callbacks",
      "Managed version control using Git/GitLab and managed CI/CD",
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
      "Built interactive and reusable user interface components with HTML, SCSS, Vanilla JS/jQuery",
      "Integrated APIs and implemented server-side functionality with Java",
      "Refactored the existent code base and fixed bugs",
      "Utilized version control with Git/GitLab for code management and gained experience in debugging and troubleshooting issues",
      "Collaborated with other senior developers and the design team to refine project requirements",
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
    tasks: [
      "Built reusable components in HTML, Tailwind CSS and Vue.js Composition API",
      "Integrated JSON Web Server with backend",
      "Applied ES6+ features and improved code readability",
      "Enhanced data processing efficiency by 30% through the implementation of ES6+ higher-order functions (.map(), .filter(), .reduce()), replacing complex nested loops",
    ],
    period: "[2025.06]",
  },
];
