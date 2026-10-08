import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-8 py-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
        <Logo />
        <div className="mono text-xs text-black/40">SINGAPORE · APAC · MIDDLE EAST</div>
        <div className="mono text-xs text-black/30">© {new Date().getFullYear()} LICO RESOURCES · <a href="/privacy" className="hover:text-black underline">PRIVACY POLICY</a></div>
      </div>
      <nav className="max-w-7xl mx-auto mt-6 flex flex-wrap gap-x-6 gap-y-2 mono text-xs text-black/40">
        <a href="/ciso-executive-search-singapore" className="hover:text-black underline">CISO EXECUTIVE SEARCH</a>
        <a href="/technology-risk-it-audit-recruitment-singapore" className="hover:text-black underline">TECH RISK &amp; IT AUDIT RECRUITMENT</a>
        <a href="/financial-services-cybersecurity-recruitment" className="hover:text-black underline">FINANCIAL SERVICES CYBER RECRUITMENT</a>
      </nav>
    </footer>
  );
}
