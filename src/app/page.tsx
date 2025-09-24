"use client";

import Hero from '@/app/sections/Hero';
import Community from '@/app/sections/Community';
import Curriculum from '@/app/sections/Curriculum';
import Audience from '@/app/sections/Audience';
import Pricing from '@/app/sections/Pricing';
import Bonuses from '@/app/sections/Bonuses';
import Testimonials from '@/app/sections/Testimonials';
import Marquee from '@/app/sections/Marquee';
import Guarantee from '@/app/sections/Guarantee';
import Faq from '@/app/sections/Faq';
import Footer from '@/components/Footer';

export default function Home() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Adjust scroll position to account for the sticky countdown header
      const headerOffset = 64; // Height of the countdown component
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <main className="flex-grow bg-background overflow-hidden">
        <Hero onCtaClick={() => handleScrollTo('pricing')} />
        <Curriculum />
        <Bonuses onCtaClick={() => handleScrollTo('pricing')} />
        <Testimonials />
        <Pricing />
        <Audience />
        <Community onCtaClick={() => handleScrollTo('pricing')} />
        <Marquee />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
