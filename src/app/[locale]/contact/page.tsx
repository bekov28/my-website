"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { pageTransition, slideInLeft, slideInRight } from "@/utils/animation";
import React from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactPage = () => {
  const t = useTranslations("ContactPage");
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const form = useRef<HTMLFormElement>(null);

  //Custom API for handling emails through backend
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus("loading");
  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to send message");
  //     }

  //     setStatus("success");
  //     setFormData({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });
  //     setTimeout(() => {
  //       setStatus("idle");
  //     }, 3000);
  //   } catch (error) {
  //     setStatus("error");
  //     console.log("Error sending message", error);
  //   }
  // };

  //EmailJS to handle Emails from frontend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    if (!form.current) return;

    try {
      await emailjs.sendForm("service_mrbbnj9", "template_ugplk9l", form.current, {
        publicKey: "NaLzH2NMYiLPH7I-X",
      });
      setStatus("success");
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch (error) {
      setStatus("error");
      console.log("Error sending message", error);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div className="container max-w-7xl mx-auto py-20" {...pageTransition}>
      <div className="text-center mb-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">
          <span>{t("contactTitle")}</span>
        </h1>
        <p className="text-secondary md:w-2/3 mt-5">{t("contactDesc")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* contact info */}
        <motion.div className="space-y-8" {...slideInLeft}>
          <h2 className="text-2xl font-semibold mb-4">{t("getInTouch")}</h2>
          <p className="text-secondary md:w-2/3">{t("getInTouchDesc")}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">{t("email")}</h3>
                <Link
                  href="mailto:berdiyororzu@gmail.com"
                  className="text-secondary hover:text-primary"
                >
                  {t("email")}
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">{t("phone")}</h3>
                <Link href="tel: 010-2811-8826" className="text-secondary hover:text-primary">
                  {t("phoneNumber")}
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              <div>
                <h3 className="text-semibold">{t("location")}</h3>
                <p className="text-secondary">{t("locationDesc")}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* contact form */}
        <motion.div
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          {...slideInRight}
          transition={{ delay: 0.2 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit} ref={form}>
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium mb-2">
                {t("name")}
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                value={formData.user_name}
                onChange={handleChange}
                placeholder={t("namePlaceholder")}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2
                 focus:ring-primary focus:border-none"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-sm font-medium mb-2">
                {t("contactEmail")}
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                placeholder={t("emailPlaceholder")}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2
                 focus:ring-primary focus:border-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t("message")}
              </label>
              <textarea
                rows={4}
                required
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("messagePlaceholder")}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2
                 focus:ring-primary focus:border-none"
              />
            </div>

            <button type="submit" className="w-full btn btn-primary">
              {status === "loading" ? "Sending..." : t("sendButton")}
            </button>

            {status === "success" && (
              <p className="text-green-500 text-center">{t("sendMessage")}</p>
            )}
            {status === "error" && <p className="text-red-500 text-center">{t("sendError")}</p>}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default ContactPage;
