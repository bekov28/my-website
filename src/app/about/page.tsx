import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

//About page ~~
const AboutPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* bio section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web
          applications. With a strong foundation in both frontend and backend technologies, I create
          seamless user interfaces and robust server-side solutions.
        </p>
      </section>

      {/* skills section */}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>HTML5 / CSS3</li>
              <li>JavaScript / TypeScript</li>
              <li>React.js / Next.js / Vue.js</li>
              <li>Tailwind CSS / SCSS</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JWT Auth</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6">
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub / GitLab</li>
              <li>Material UI</li>
              <li>Postman / Swiper</li>
              <li>Axios / Multer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* experience section */}
      <section className="mb-16">
        <h2 className="section-title">Experience</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-2">coForward · 2025.03 ~ Present</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Built interactive and reusable user interface components with HTML, CSS and Vue.js
              </li>
              <li>
                Developed and designed the finance and trade web platform using JavaScript (ES6+)
                and implemented server-side functionality using Java, contributing to the
                development of RESTful APIs for front-end
              </li>
              <li>
                Collaborated with senior developers and designers to translate UI/UX wireframes into
                functional code
              </li>
              <li>
                Utilized version control with Git/GitLab for code management and gained experience
                in debugging and troubleshooting issues according the entire application stack
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">IT BootCamp Graduate</h3>
            <p className="text-primary mb-2">BeCoder · 2024.06 - 2024.12</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Created user-friendly and responsive web applications using React.js</li>
              <li>
                Integrated frontend and backend systems through APIs with Node.js using Express.js
                (MERN Stack)
              </li>
              <li>
                Worked with design tools, such as Figma and colloborated with other developers
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* education section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Master of Business Administration (MBA)</h3>
            <p className="text-primary mb-2">Dongseo University · 2016.09 - 2018.08</p>
            <p className="text-secondary">
              Studied marketing, finance, international trade, economics and business
            </p>
          </div>
        </div>
      </section>

      {/* Tech certificates/courses */}
      <section className="mb-16">
        <h2 className="section-title">IT courses/certificates</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Responsive Web Design Course (+certificate)
            </h3>
            <p className="text-primary mb-2">freeCodeCamp · 2024.12 - 2025.02</p>
            <p className="text-secondary">
              Completed 300-hour course and gained foundation web development skills in HTML and CSS
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Responsive Web Design, HTML Structure</li>
              <li>CSS Box Model, CSS Grid, CSS Animations, CSS Flexbox and others</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;
