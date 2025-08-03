import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-5 font-Ovo mt-3 dark:text-white">
        Hi! I'm Berdiyor Orzikulov <Image src={assets.hand_icon} alt="" className=" w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo mt-4 dark:text-white">
        Full Stack Web Developer based in Seoul, Korea
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo mt-4 dark:text-gray-300">
        I am a full stack engineer from Uzbekistan with around 1 year of experience in multiple IT
        companies.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-white dark:text-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
        >
          contact me <Image src={assets.right_arrow_white} alt="" className="w-4 dark:hidden" />
          <Image src={assets.right_arrow_bold} alt="" className="w-4 hidden dark:block" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-white dark:border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
