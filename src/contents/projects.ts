import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "[Team Work] Shinhan Bank Foreign Exchange Trading Platform [2025.06 - 2026.02]",
    description: `This Web-only Trading Platform of Shinhan Bank enables customers to register an account and start exchanging varius types of SWAP operations and other trading operations.`,
    technologies: ["Vue.js", "Java", "Spring-boot", "Maven"],
    githubLink: "",
    demoLink: "https://efx.shinhan.com/",
    image: "/projects/shinhan.png",
    role: "Role: Front-end developer, worked on the UI/UX part, added JS logic and integrated multiple APIs, implemented the front-end components of Account Widget, Service Information, Swap Point Rate",
    tasks: [
      "Developed reusable UI components for web trade application using JavaScript, Vue.js and Vite, reducing frontend development time for new features by 30%",
      "Translated Figma designs into functional codes",
      "Integrated RESTful APIs and managed state by Pinia to provide seemless data flow",
      "Managed version control using Git/GitLab",
    ],
    period: "[2025.06 ~ 2026.02]",
  },
  {
    title:
      "[Team Work] Eugene Securities US Stock Options Trading Platform (Web/Mobile) [2025.03 - 2025.05]",
    description: `This mobile trading application allows Korean customers to trade US stocks and options through long and short spreads and customers can also open an account for trading.`,
    technologies: ["SCSS", "JavaScript", "Java", "Spring-boot", "Gradle"],
    githubLink: "",
    demoLink: "https://www.eugenefutures.com/OptionsHub/index.html",
    image: "/projects/yujin.png",
    role: "Role: Front-end developer for UI/UX (contribution rate: 10%) with other 3 front-end developers in the small team. Collaborated with other senior developers and the design team to refine project requirements and fixed bugs.",
    tasks: [],
    period: "[2025.03 ~ 2025.06.15]",
  },
];
