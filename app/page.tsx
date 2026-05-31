import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import PeopleGrid from "@/components/PeopleGrid";
import Specialisations from "@/components/Specialisations";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contractors from "@/components/Contractors";
import Insights from "@/components/Insights";
import CTAFooter from "@/components/CTAFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="dark-hero">
        <Nav />
        <Hero />
      </div>
      <TrustStrip />
      <PeopleGrid />
      <Specialisations />
      <Process />
      <Testimonials />
      <Contractors />
      <Insights />
      <CTAFooter />
      <Footer />
    </main>
  );
}
