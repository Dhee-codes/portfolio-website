import { Socials } from "../ui/Socials";
import { Logo } from "../Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between items-center gap-4 bg-primary/10 px-6 lg:px-32 py-6">
      <Logo className="w-36 h-auto" />

      <Socials className="scale-52" />

      <p className="text-sm">&copy; DheeCodes. All rights reserved.</p>
    </footer>
  );
}
