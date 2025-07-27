import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={assets.profile_img} alt="user" className="w-full rounded-3xl" />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an aspriring full stack developer with a focus on customer needs and business
            goals. I am passionate in crafting clean, functional and user-friendly digital
            experiences. I specialize in front-end and back-end development and enjoy turning ideas
            into reality through code. With a keen eye for detail and a commitment to best
            practices, I build responsive, performant, and accessible websites. Let's create
            something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
