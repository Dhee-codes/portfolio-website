import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const BackLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href} className="text-lg mb-10 inline-block hover:underline">
      <span className="flex justify-center items-center gap-4">
        <ArrowLeft className="size-[1em]" /> {label}
      </span>
    </Link>
  );
};
