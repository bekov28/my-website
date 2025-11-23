import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "[Team Work] Shinhan Bank Foreign Exchange Trading Platform [Ongoing]",
    description: `This Web-only Trading Platform of Shinhan Bank enables customers to register an account and start exchanging varius types of SWAP operations and other trading operations.`,
    technologies: ["HTML", "CSS", "SCSS", "Vue.js", "Java", "Spring-boot", "Maven"],
    githubLink: "",
    demoLink: "",
    image: "/projects/shinhan.png",
    role: "Role: Front-end developer, worked on the UI/UX part, added JS logic and integrated multiple APIs, implemented the front-end components of Account Widget, Service Information, Swap Point Rate",
    period: "[2025.06 ~ 2025.12]",
  },
  {
    title:
      "[Team Work] Eugene Investment and Securities US Stock Options Trading Platform (Mobile)",
    description: `This mobile trading application allows Korean customers to trade US stocks and options through long and short spreads and customers can also open an account for trading.`,
    technologies: ["HTML", "CSS", "SCSS", "JavaScript", "Java", "Spring-boot", "Gradle"],
    githubLink: "",
    demoLink: "https://www.eugenefutures.com/OptionsHub/index.html",
    image: "/projects/yujin.png",
    role: "Role: Front-end developer for UI/UX (contribution rate: 10%) with other 3 front-end developers in the small team. Collaborated with other senior developers and the design team to refine project requirements and fixed bugs.",
    period: "[2025.03 ~ 2025.06.15]",
  },
  {
    title: "Job Searching Platform for Vue.js Developers",
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
    title: "Premium Granite E-commerce Shop",
    description: `This Firebase-powered full stack website is an online store where users can sign up and look through the all types of valuables stones, such as Granite, Quartz, Marble, etc. Built in Vue.js, user roles and admin role is separated, where only the admin can add and edit the product list.`,
    technologies: ["Vue.js", "Pinia", "Firebase", "Bootstrap"],
    githubLink: "https://github.com/bekov28/granite-online-shop",
    demoLink: "https://graniteshop-29e1a.web.app/",
    image: "/projects/stone-website.png",
    role: "",
    period: "",
  },
  {
    title: "Campcar Renting Platform",
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
