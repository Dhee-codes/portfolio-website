"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const linkClass =
  "text-[#cdd0e3] hover:text-[#6872ab] transition-colors duration-300 text-base px-3 py-2";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md bg-black/50">
      <nav className="flex justify-between items-center px-16 py-6">
        <Link href="/">
          <Image
            src="/images/logo/DheeLabs-Logo.svg"
            alt="DheeLabs logo"
            width={180}
            height={40}
          />
        </Link>

        <ul className="flex gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
