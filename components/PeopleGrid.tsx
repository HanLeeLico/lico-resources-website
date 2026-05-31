const people = [
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    domain: "CYBERSECURITY",
    role: "CISO & Security Leadership",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    domain: "TECHNOLOGY GRC",
    role: "IT Audit Leadership",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    domain: "TECHNOLOGY GRC",
    role: "Tech Risk Specialists",
  },
  {
    src: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    domain: "CYBERSECURITY",
    role: "Cloud & AppSec Engineers",
  },
];

export default function PeopleGrid() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
        <div className="md:col-span-7">
          <div className="tag mono mb-4">WHO WE RECRUIT</div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Real roles. <span className="accent">Real careers.</span>
          </h2>
        </div>
        <div className="md:col-span-5 text-black/55 leading-relaxed">
          Behind every search is a person making a major career decision. We treat that with the weight it deserves — quietly, carefully, with the domain knowledge to ask the right questions.
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {people.map((p, i) => (
          <div key={i} className="person-tile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt="" />
            <div className="person-label">
              <div className="mono text-xs accent mb-1">{p.domain}</div>
              <div className="text-sm font-semibold">{p.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
