import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" aria-label="Lico Resources home">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/services" className="hover:text-black">Services</Link>
          <Link href="/contractors" className="hover:text-black">Contractors</Link>
          <Link href="/insights" className="hover:text-black">Insights</Link>
          <Link href="/contact" className="btn-ghost px-4 py-2 rounded-md">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
