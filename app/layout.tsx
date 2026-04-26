import type { Metadata } from "next";
import { Special_Gothic_Expanded_One, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  title: "Divine Obiorah | Frontend Developer",
  description:
    "Frontend Developer specializing in pixel-accurate, accessible interfaces using Next.js, React, and TypeScript. Explore my portfolio and get in touch today!",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Divine Obiorah",
  ],
  authors: [{ name: "Divine Obiorah" }],
  openGraph: {
    title: "Divine Obiorah | Frontend Developer",
    description:
      "Frontend Developer specializing in pixel-accurate, accessible interfaces using Next.js, React, and TypeScript. Explore my portfolio and get in touch today!",
    url: "https://dheecodes.vercel.app",
    siteName: "DheeCodes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Obiorah | Frontend Developer",
    description:
      "Frontend Developer specializing in pixel-accurate, accessible interfaces using Next.js, React, and TypeScript. Explore my portfolio and get in touch today!",
    creator: "@Dheecodes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${gothic.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
