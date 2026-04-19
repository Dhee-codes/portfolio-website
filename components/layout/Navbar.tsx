"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, type Navlink } from "@/lib/navlinks";
import { useRouter } from "next/navigation";
import ThemeToggle from "../ui/ThemeToggle";

const linkClass =
  "text-foreground hover:text-primary transition-colors duration-300 font-medium px-3 py-2";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push("/");
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md bg-card/70">
        <nav className="flex justify-between items-center px-6 md:px-16 py-4 md:py-6">
          <Link
            href="/"
            onClick={handleHomeClick}
            className="relative w-38 md:w-45 h-10"
          >
            <Image
              src="/images/logo/DheeCodes-light.svg"
              alt="DheeCodes logo"
              fill
              priority
              className="object-contain"
            />
          </Link>

          <ul className="hidden md:flex gap-6 list-none">
            {navLinks.map((link: Navlink) => (
              <li key={link.href}>
                {link.label === "Home" ? (
                  <Link href="/" onClick={handleHomeClick} className={linkClass}>
                    {link.label}
                  </Link>
                ) : (
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Hamburger button — visible on mobile only */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            {/* hamburger lines */}
            <Menu className="size-8 hover:text-primary transition-colors" />
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-100 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 bg-background flex flex-col p-6 gap-6 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end"
            aria-label="Close menu"
          >
            <X className="size-10 hover:text-primary transition-colors" />
          </button>

          <ul className="flex flex-col gap-12 pl-8 pt-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${linkClass} text-[1.5rem]`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
