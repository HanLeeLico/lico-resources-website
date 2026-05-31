export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="glow glow-red-1" />
      <div className="glow glow-red-2" />

      <div className="relative max-w-7xl mx-auto px-8 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="tag mono mb-6 flex items-center gap-3">
              <span className="pulse-dot" /> CYBERSECURITY · TECHNOLOGY GRC
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Less is more.
              <br />
              <span className="accent">Specialisation matters.</span>
            </h1>

            <p className="text-black/65 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Lico Resources is a specialist recruitment firm focused on cybersecurity and technology{" "}
              <span className="text-black font-semibold">Governance, Risk &amp; Compliance</span> — across Singapore, APAC, and the Middle East.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary px-6 py-3.5 rounded-md font-semibold inline-flex items-center gap-2">
                Hire Talent <span>→</span>
              </a>
              <a href="/contact" className="btn-ghost px-6 py-3.5 rounded-md font-semibold">For Candidates</a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="portrait-wrap max-w-md mx-auto">
              <div className="portrait-frame aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 mt-20 pt-10 border-t border-black/10">
          {[
            ["500", "+", "PROFESSIONALS PLACED"],
            ["78", "+", "COMPANIES PARTNERED"],
            ["13", "", "YEARS EXPERIENCE"],
            ["9", "", "COUNTRIES SERVED"],
          ].map(([num, plus, label]) => (
            <div key={label}>
              <div className="stat-num text-5xl md:text-6xl font-black">
                {num}
                {plus && <span className="accent">{plus}</span>}
              </div>
              <div className="mono text-xs text-black/50 mt-2 tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
