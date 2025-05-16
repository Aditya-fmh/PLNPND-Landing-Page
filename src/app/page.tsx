import Hero from "./components/Hero";
import FeaturedLaptops from "./components/FeaturedLaptops";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedLaptops />
      <Testimonials />
      <CTASection />
    </div>
  );
}
