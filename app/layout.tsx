import type { Metadata } from "next";
import { Special_Gothic_Expanded_One, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";

const gothic = Special_Gothic_Expanded_One({
  variable: "--font-gothic",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DheeCodes | Frontend Developer",
  description: "Portfolio of Divine Obiorah, a Frontend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gothic.variable} ${inter.variable} antialiased suppressHydrationWarning`}
    >
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
