import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const Outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "my-website",
  description: "My Portfolio Website built in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
