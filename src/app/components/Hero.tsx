import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/profile_img.jpg"
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Berd</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer | UI/UX Enthusiast | Software Engineer
        </p>
      </div>
    </section>
  );
};

export default Hero;
