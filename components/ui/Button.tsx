import Link from "next/link";
import { ArrowRight, Download, ExternalLink } from "lucide-react";

const btnStyles = "flex justify-center items-center gap-4 text-card text-base font-semibold text-nowrap rounded-xl px-12 py-4 hover:scale-105 transition-transform duration-300";

export const LinkBtn = ({
  href,
  onClick,
  label,
  className,
}: {
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  label: string;
  className: string;
}) => {
  return (
    <Link href={href} onClick={onClick} className={`${btnStyles} ${className}`}>
      {label}
      <ArrowRight className="size-[1.2em]" />
    </Link>
  );
};

export const DownloadBtn = ({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className: string;
}) => {
  return (
    <Link href={href} download className={`${btnStyles} ${className}`}>
      {label}
      <Download className="size-[1.2em]" />
    </Link>
  );
};

const exportLinkStyles =
  "flex justify-between items-center text-sm font-semibold rounded-xl px-6 py-3 text-center hover:scale-105 transition-transform duration-300";

export const ExternalLinkBtn = ({
  label,
  href,
  className,
}: {
  label: string;
  href: string;
  className: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${exportLinkStyles} ${className}`}
    >
      {label} <ExternalLink className="size-[1.2em]" />
    </a>
  );
};
