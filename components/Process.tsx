const steps = [
  {
    label: "STEP 01",
    title: "Discovery",
    body: "Deep brief on role, team, stack, culture. Must-haves vs nice-to-haves.",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21c0-4 3.5-7 7-7s7 3 7 7" />
        <path d="M18 5a3 3 0 0 1 0 6" />
      </>
    ),
  },
  {
    label: "STEP 02",
    title: "Shortlist",
    body: "Curated 3–5 candidates, each interviewed and contextualised. No spam.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3 2.5-5.5 6-5.5s6 2.5 6 5.5" />
        <circle cx="17" cy="6" r="2.5" />
        <path d="M16 14c2.5 0 5 1.8 5 4.5" />
      </>
    ),
  },
  {
    label: "STEP 03",
    title: "Interview",
    body: "Confidential coordination, structured feedback both ways, reference work.",
    icon: (
      <>
        <circle cx="7" cy="8" r="2.5" />
        <circle cx="17" cy="8" r="2.5" />
        <path d="M3 19c0-2.5 2-4.5 4-4.5s4 2 4 4.5" />
        <path d="M13 19c0-2.5 2-4.5 4-4.5s4 2 4 4.5" />
      </>
    ),
  },
  {
    label: "STEP 04",
    title: "Offer & Onboard",
    body: "Offer negotiation, counter-offer management, 90-day check-in.",
    icon: (
      <>
        <path d="M8 11l2-2 4 4 4-4" />
        <path d="M3 13l5 5 5-5" />
        <path d="M13 9h5l3 3v5l-3 3h-5" />
      </>
    ),
  },
];

export default function Process() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="tag mono mb-4">HOW WE WORK</div>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-12 max-w-3xl">
        A four-step search, <span className="accent">end-to-end.</span>
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.title}>
            <div className="mono accent text-sm mb-3">{s.label}</div>
            <div className="w-12 h-12 rounded-md border border-black/15 flex items-center justify-center mb-4">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" className="icon-stroke">
                {s.icon}
              </svg>
            </div>
            <div className="font-bold text-lg mb-2">{s.title}</div>
            <div className="text-black/55 text-sm leading-relaxed">{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
