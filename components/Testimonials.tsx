type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo?: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  { quote: "Professional, efficient, and results-driven. Lico Resources exceeded our expectations in finding top-tier talent.", name: "Suzie Ahmad", role: "Senior Regional TA Lead, HCLTech", photo: "https://www.licoresources.com/testimonials/suzieahmed.jpg", initials: "SA" },
  { quote: "Lico Resources demonstrated exceptional professionalism and deep understanding of our requirements.", name: "George Francis Albert", role: "Senior Manager, Infrastructure Information Security & Governance, AIA Singapore", photo: "https://www.licoresources.com/testimonials/georgefrancisalbert.jpg", initials: "GA" },
  { quote: "Their expertise in cybersecurity recruitment is unmatched. Highly recommend their services.", name: "Kevin Lai", role: "Assistant Director, Synapse", photo: "https://www.licoresources.com/testimonials/kevinlai.jpg", initials: "KL" },
  { quote: "Absolutely professional in providing just the right amount of information at the right touch points. Quick resolutions and seamless positive outcome.", name: "Paul Tan", role: "Enterprise Risk, Singapore Exchange", photo: "https://www.licoresources.com/testimonials/paultan.jpg", initials: "PT" },
  { quote: "Professional approach and quality candidates. Lico Resources delivers on their promises.", name: "Jean Tay", role: "Head of Sustainability, Levanta Renewable", photo: "https://www.licoresources.com/testimonials/jeantay.jpg", initials: "JT" },
  { quote: "One of the greatest strengths is the ability to offer valuable advice and guidance, demonstrating a good understanding of the industry and market trends.", name: "Joseph Lee", role: "Compliance Director, PetroChina International", photo: "https://www.licoresources.com/testimonials/josephlee.jpg", initials: "JL" },
  { quote: "Outstanding expertise in recruiting technology and cyber risk professionals within the financial services industry. Deep understanding of the tech risk landscape and job requirements.", name: "Daniel Tan", role: "Director – Information Security, Kulicke & Soffa Industries", initials: "DT" },
  { quote: "Listens to the needs of us as a client and carefully discusses requirements to ensure the best fit.", name: "Christian Krebs", role: "Regional Head, Aquila Capital", photo: "https://www.licoresources.com/testimonials/christiankrebs.jpg", initials: "CK" },
  { quote: "A highly driven recruiter who understands the market and delivers results consistently.", name: "Aaron Huang", role: "VP, Singapore & South East Asia, Sembcorp Industries", photo: "https://www.licoresources.com/testimonials/aaronhuang.jpg", initials: "AH" },
  { quote: "Excellent service delivery and strong candidate pipeline. A trusted recruitment partner.", name: "Joicy Dinh", role: "Managing Director, Rabobank Hong Kong", photo: "https://www.licoresources.com/testimonials/joicydinh.jpg", initials: "JD" },
  { quote: "Outstanding recruitment expertise with deep industry knowledge and excellent results.", name: "Mark Dymock", role: "Chief of Staff, Standard Chartered Bank", photo: "https://www.licoresources.com/testimonials/markdymock.jpg", initials: "MD" },
  { quote: "A very trustworthy recruiter.", name: "Aaron Huang", role: "CEO, Bank of China Private Equity Investment", photo: "https://www.licoresources.com/testimonials/aaronhuangbankofchina.jpg", initials: "AH" },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="t-card">
      <div>
        <div className="t-quote-icon">&ldquo;</div>
        <p className="text-black/85 leading-relaxed">{t.quote}</p>
      </div>
      <div className="flex items-center gap-3 pt-5 border-t border-black/10 mt-5">
        {t.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <div className="avatar-photo"><img src={t.photo} alt={t.name} /></div>
        ) : (
          <div className="avatar">{t.initials}</div>
        )}
        <div>
          <div className="font-semibold text-sm">{t.name}</div>
          <div className="text-xs text-black/50">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#F4F1ED] border-y border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 pt-24 pb-6">
        <div className="tag mono mb-4">WHAT OUR CLIENTS SAY</div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl">
          Words from <span className="accent">the people we've worked with.</span>
        </h2>
        <p className="text-black/55 max-w-2xl mb-12">
          Trusted by leading organisations across industries. Hover to pause.
        </p>
      </div>

      <div className="t-marquee pb-24">
        <div className="t-marquee-inner">
          {testimonials.map((t, i) => <Card key={`a-${i}`} t={t} />)}
        </div>
        <div className="t-marquee-inner" aria-hidden="true">
          {testimonials.map((t, i) => <Card key={`b-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
}
