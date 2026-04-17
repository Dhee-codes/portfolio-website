import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-32 py-6 border-t border-[#c6c4cc]/10">
      <Link href="/">
        <Image
          src="/images/logo/DheeLabs-Logo.svg"
          alt="DheeLabs logo"
          width={120}
          height={40}
        />
      </Link>
      <p className="text-sm text-[#c6c4cc]">
        &copy; DheeLabs. All rights reserved.
      </p>
    </footer>
  );
}
