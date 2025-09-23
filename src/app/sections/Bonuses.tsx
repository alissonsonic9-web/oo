"use client";

import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import Image from "next/image";

const bonuses = [
    { 
        title: "Bypass iOS 17.5", 
        description: "Desbloqueio completo para iPhones, desde o iPhone 5S até o 15 Pro Max, incluindo o iOS 17.5. Aprenda passo a passo a desbloquear todos os modelos de iPhone.",
        image: "https://i.postimg.cc/4xGzkX8p/bonus-1-removebg-preview.png"
    },
    { 
        title: "FRP Xiaomi e Conta Mi Cloud", 
        description: "Aprenda a remover o FRP e desbloquear contas Mi Cloud, com métodos comprovados e eficazes para todos os modelos de Xiaomi.",
        image: "https://i.postimg.cc/vZv5GCjk/bonus-2-removebg-preview.png"
    },
    { 
        title: "Suporte Individual via AnyDesk", 
        description: "Suporte remoto personalizado via AnyDesk, com resolução de problemas em tempo real e acompanhamento individual.",
        image: "https://i.postimg.cc/Jh6JkZRQ/bonus-3-removebg-preview.png"
    },
    { 
        title: "Servidores e Ferramentas Exclusivas", 
        description: "Acesso exclusivo a servidores e ferramentas profissionais para facilitar o processo de desbloqueio.",
        image: "https://i.postimg.cc/Jh6JkZRQ/bonus-3-removebg-preview.png"
    },
    { 
        title: "Ferramentas para Assistências Técnicas", 
        description: "Acesso a ferramentas essenciais para a assistência técnica de celulares, incluindo softwares e hardware.",
        image: "https://i.postimg.cc/nzXmYrzf/bonus-5-removebg-preview.png"
    },
    { 
        title: "FRP em Um Clique", 
        description: "Desbloqueio rápido e eficaz com a ferramenta FRP, em apenas um clique, para dispositivos Samsung, LG e Motorola.",
        image: "https://i.postimg.cc/rFX4x827/bonus-6-removebg_preview.png"
    },
];

export default function Bonuses() {

  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bonuses" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">🎁 +6 Bônus Exclusivos</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    No <span className="text-primary font-bold">plano premium</span>, você ganha 6 bônus que valem mais que o próprio curso:
                </p>
            </div>
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              {bonuses.map((bonus, index) => (
                <div key={index} className="group relative flex flex-col items-center text-center bg-card border border-border/20 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-accent">
                    <div className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_25px_-5px_hsl(var(--accent))] opacity-75"></div>
                    <div className="relative z-10 flex flex-col items-center h-full">
                        <Image
                            src={bonus.image}
                            width={150}
                            height={150}
                            alt={bonus.title}
                            className="object-contain"
                            data-ai-hint="bonus illustration"
                        />
                        <h3 className="mt-4 text-xl font-bold font-headline text-foreground">{bonus.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground flex-grow">{bonus.description}</p>
                    </div>
                </div>
              ))}
            </div>
            <div className="pt-8">
              <Button size="lg" className="font-bold text-lg py-7 px-10" onClick={handleScrollToPricing}>
                  QUERO TODOS OS BÔNUS AGORA
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}