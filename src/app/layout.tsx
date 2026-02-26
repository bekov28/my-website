import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
// import { routing } from "./i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Berd | Software Developer",
  description: "Welcome to my website",
};

// Next.js 16 requires params to be a Promise
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  // Await the params to get the locale (e.g., 'en' or 'ko')
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white transition-colors dark:bg-gray-900 text-white`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider>
            <Navbar />
            <main className="min-h-screen pt-24 dark:text-white text-black"> {children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
