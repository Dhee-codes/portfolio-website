"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "../Logo";
import { useRouter, usePathname } from "next/navigation";
import { ModeToggle } from "../ui/ModeToggle";

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Tech Stack", href: "/#tech-stack" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

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

  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-card/60">
        <nav className="flex justify-between items-center px-6 md:px-16 py-4 md:py-6">
          <Link href="/" onClick={handleHomeClick}>
            <Logo className="w-32 md:w-45 h-auto" />
          </Link>

          {isHome && (
            <ul className="hidden md:flex gap-6 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.label === "Home" ? (
                    <Link
                      href="/"
                      onClick={handleHomeClick}
                      className={linkClass}
                    >
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
          )}

          <div className="flex justify-center items-center max-sm:gap-4">
            <ModeToggle />

            {isHome && (
              <button
                className="md:hidden"
                onClick={() => setIsOpen(true)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Open menu"
              >
                <Menu className="size-8 p-1 rounded-lg hover:border hover:border-primary hover:text-primary transition-colors" />
              </button>
            )}
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        inert={isOpen ? undefined : true}
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
            <X className="size-8 p-1 rounded-lg hover:border hover:border-primary hover:text-primary transition-colors" />
          </button>

          <ul className="flex flex-col gap-12 pl-8 pt-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.label === "Home" ? (
                  <Link
                    href="/"
                    onClick={(e) => {
                      setIsOpen(false);
                      handleHomeClick(e);
                    }}
                    className={`${linkClass} text-[1.25rem]`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className={`${linkClass} text-[1.25rem]`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
