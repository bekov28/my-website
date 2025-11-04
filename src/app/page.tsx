import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";

//Home Page
export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Blogs />
      {/* <Newsletter /> */}
    </>
  );
}
