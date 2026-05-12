import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Metrics from '@/components/Metrics';
import TechStack from '@/components/TechStack';
import EngineeringMindset from '@/components/EngineeringMindset';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Products />
      <Metrics />
      <TechStack />
      <EngineeringMindset />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </div>
  );
}