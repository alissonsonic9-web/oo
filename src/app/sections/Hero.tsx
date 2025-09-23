"use client";

import { Button } from '@/components/ui/button';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section
      className="relative w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://i.postimg.cc/mgHFJ21y/Design-sem-nome-2.png')` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
              Descubra como transformar desbloqueios de celulares <span className="text-primary">em uma renda de mais de R$10.000/mês</span>
            </h1>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <Button onClick={onCtaClick} size="lg" className="font-bold text-lg py-7 px-8">
              QUERO APRENDER AGORA!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
