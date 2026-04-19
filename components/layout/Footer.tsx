import Image from "next/image";
import Link from "next/link";
import { Socials } from "../ui/Socials";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between items-center gap-6 bg-primary/10 px-6 lg:px-32 py-6">
      <Link href="/" className="relative w-45 h-10">
        <Image
          src="/images/logo/DheeCodes-light.svg"
          alt="DheeCodes logo"
          fill
          priority
          className="object-contain"
        />
      </Link>

      <Socials className="scale-70" />

      <p className="text-base">&copy; DheeCodes. All rights reserved.</p>
    </footer>
  );
}
