import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 px-8 py-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
        <Logo />
        <div className="mono text-xs text-black/40">SINGAPORE · APAC · MIDDLE EAST</div>
        <div className="mono text-xs text-black/30">© {new Date().getFullYear()} LICO RESOURCES</div>
      </div>
    </footer>
  );
}
