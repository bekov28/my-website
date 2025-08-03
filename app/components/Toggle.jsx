"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      <Image
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        alt="theme toggle"
        className="w-6 h-6"
      />
    </button>
  );
}
