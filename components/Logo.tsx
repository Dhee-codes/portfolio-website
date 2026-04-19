import Image from "next/image";

export const Logo = ({ className = "" }) => {
  return (
    <>
      <Image
        src="/images/logo/DheeCodes-light.svg"
        alt="DheeCodes logo"
        width={395}
        height={67}
        priority
        className={`object-contain ${className}`}
      />
    </>
  );
}
