import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
Image;

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="w-36 mx-auto mb-2 flex items-center justify-center">
        <h1 className="font-semibold text-4xl">Berd</h1>
        <span className="inline-block h-2 w-2 rounded-full bg-red-500 mt-4 ml-1"></span>
      </div>

      <div className="w-max flex items-center gap-2 mx-auto">
        <Image src={assets.mail_icon} alt="" className="w-6" />
        orziqulov_berdiyor@mail.ru
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Berdiyor Orzikulov. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/bekov28">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/berdiyor-orzikulov/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
