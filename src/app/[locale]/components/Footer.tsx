import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-col justify-center items-center">
            <div className="text-primary flex justify-center items-center gap-1">
              <SiBuymeacoffee className="h-8 w-8 flex" />
              <Link href="/" className="text-xl font-bold">
                Berdiyor Orzikulov
              </Link>
            </div>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/bekov28"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/berdiyor-orzikulov/"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://t.me/bekov28"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
            >
              <FaTelegram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
