import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "my-website",
  description: "My Portfolio Website built in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ovo.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
