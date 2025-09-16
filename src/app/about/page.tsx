import { FaCode } from "react-icons/fa";

//About page
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
              <li>Tailwind CSS / SASS</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>JWT Auth</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg gap-6">
            <FaCode className="h-8 w-8 text-primary mb-4" />
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

        <div>
          <div className="bg-white dark:bg-dark/50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className=""></p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;
