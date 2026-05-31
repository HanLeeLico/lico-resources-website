import Image from "next/image";

export default function Logo() {
  return (
    <div className="logo-mark" aria-label="Lico Resources">
      <Image
        className="logo-light"
        src="/lico-logo.png"
        alt="Lico Resources"
        width={500}
        height={321}
        priority
      />
      <Image
        className="logo-dark"
        src="/lico-logo-dark.png"
        alt="Lico Resources"
        width={500}
        height={321}
        priority
      />
    </div>
  );
}
