import Header from '@/components/Header';
import Hero from '@/app/sections/Hero';
import ProblemSolution from '@/app/sections/ProblemSolution';
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
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <Community />
        <Curriculum />
        <Audience />
        <Pricing />
        <Bonuses />
        <Testimonials />
        <Marquee />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
