"use client"; //changing server components to client components

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";
import { SiBuymeacoffee } from "react-icons/si";
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");

  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div
      className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 
    border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors"
    >
      <div className="container max-w-7xl mx-auto px-4 text-black dark:text-white">
        {/* desktop menu */}
        <div className="flex items-center justify-between h-16">
          <div className="text-primary flex justify-center items-center gap-1">
            <SiBuymeacoffee className="h-8 w-8 flex" />
            <Link href="/" className="text-xl font-bold text-primary">
              {t("name")}
            </Link>
          </div>
          {/* desktop menus */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? "text-primary" : ""
                  }`}
                >
                  {t(item.label.toLowerCase())}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 
            transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
            <LanguageToggle />
          </div>

          {/* mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-500
		   dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} onClick={toggleMobileMenu}>
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    {t(item.label.toLowerCase())}
                  </Link>
                </div>
              ))}
              <div>
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false); //close menu after theme toggle
                  }}
                  className="flex items-center py-2 hover:text-primary transition-colors"
                >
                  {theme === "dark" ? (
                    <SunIcon className="w-5 h-5 mr-2" />
                  ) : (
                    <MoonIcon className="w-5 h-5 mr-2" />
                  )}
                </button>
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
