import { Socials } from "../ui/Socials";
import { Logo } from "../Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between items-center gap-6 bg-primary/10 px-6 lg:px-32 py-6">
      <Logo className="w-45 h-auto" />

      <Socials className="scale-68" />

      <p className="text-base">&copy; DheeCodes. All rights reserved.</p>
    </footer>
  );
}
