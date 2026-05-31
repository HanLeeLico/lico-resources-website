const items = [
  "Tier-1 Singapore Bank",
  "Global Big 4 Consultancy",
  "MAS-Regulated FinTech",
  "APAC Cloud Provider",
  "Regional Healthcare Group",
  "Sovereign Wealth Fund",
  "Middle East Energy Major",
  "Global Reinsurer",
  "Defence Contractor",
  "E-commerce Unicorn",
];

function Strip({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-inner mono text-sm text-black/40 whitespace-nowrap" aria-hidden={ariaHidden}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-16">
          <span>{it}</span>
          <span className="accent">/</span>
        </span>
      ))}
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section className="border-y border-black/10 py-8 bg-[#F4F1ED]">
      <div className="max-w-7xl mx-auto px-8 mb-4">
        <div className="tag mono">PLACED AT</div>
      </div>
      <div className="marquee">
        <Strip />
        <Strip ariaHidden />
      </div>
    </section>
  );
}
