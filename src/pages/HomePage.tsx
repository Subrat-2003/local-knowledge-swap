
import EcoHero from '@/components/EcoHero';
import ProblemSolution from '@/components/ProblemSolution';
import HowItWorks from '@/components/HowItWorks';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import { useEffect } from 'react';

const HomePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      <EcoHero />
      <ProblemSolution />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default HomePage;
