import Image from "next/image";
import Link from "next/link";
import { navLinks, type Navlink } from "@/app/constants/navlinks";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 bg-primary/10 px-6 lg:px-32 py-6">
      <Link href="/">
        <Image
          src="/images/logo/DheeCodes-light.svg"
          alt="DheeCodes logo"
          width={180}
          height={40}
          priority
          className="w-45 h-auto"
        />
      </Link>

      <ul className="flex flex-col md:flex-row gap-4 list-none max-sm:pl-2">
        {navLinks.map((link: Navlink) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-base">&copy; DheeCodes. All rights reserved.</p>
    </footer>
  );
}
