import { Phone, Mail } from "lucide-react";

const iconStyle = "size-[1.8em] text-primary-light";

const address = [
  {
    href: "tel:+2349065593373",
    label: "+234 906 559 3373",
    icon: <Phone className={`${iconStyle}`} />,
  },
  {
    href: "mailto:divine.e.obiorah@gmail.com",
    label: "divine.e.obiorah@gmail.com",
    icon: <Mail className={`${iconStyle}`} />,
  },
];

export const ContactAddress = () => {
  return (
    <div className="flex flex-wrap gap-y-4 gap-x-16 mb-10">
      {address.map((a) => (
        <a
          key={a.href}
          href={a.href}
          className="text-sm flex items-center gap-2"
        >
          {a.icon}
          {a.label}
        </a>
      ))}
    </div>
  );
};
