"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import placeholderImages from '@/lib/placeholder-images.json';
import Link from "next/link";

const bonuses = [
    { 
        title: "Bypass iOS 17.5", 
        description: "Desbloqueio completo para iPhones, desde o iPhone 5S até o 15 Pro Max, incluindo o iOS 17.5. Aprenda passo a passo a desbloquear todos os modelos de iPhone.",
        imageKey: "bonus-1"
    },
    { 
        title: "FRP Xiaomi e Conta Mi Cloud", 
        description: "Aprenda a remover o FRP e desbloquear contas Mi Cloud, com métodos comprovados e eficazes para todos os modelos de Xiaomi.",
        imageKey: "bonus-2"
    },
    { 
        title: "Suporte Individual via AnyDesk", 
        description: "Suporte remoto personalizado via AnyDesk, com resolução de problemas em tempo real e acompanhamento individual.",
        imageKey: "bonus-3"
    },
    { 
        title: "Servidores e Ferramentas Exclusivas", 
        description: "Acesso exclusivo a servidores e ferramentas profissionais para facilitar o processo de desbloqueio.",
        imageKey: "bonus-4"
    },
    { 
        title: "Ferramentas para Assistências Técnicas", 
        description: "Acesso a ferramentas essenciais para a assistência técnica de celulares, incluindo softwares e hardware.",
        imageKey: "bonus-5"
    },
    { 
        title: "FRP em Um Clique", 
        description: "Desbloqueio rápido e eficaz com a ferramenta FRP, em apenas um clique, para dispositivos Samsung, LG e Motorola.",
        imageKey: "bonus-6"
    },
];

interface BonusesProps {
  onCtaClick: () => void;
}

export default function Bonuses({ onCtaClick }: BonusesProps) {

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
            <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              {bonuses.map((bonus, index) => {
                const imageData = placeholderImages[bonus.imageKey as keyof typeof placeholderImages];
                return (
                    <div key={index} className="group relative flex flex-col items-center text-center bg-card border border-border/20 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-accent hover:shadow-accent/20 min-h-[320px]">
                        <div className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_25px_-5px_hsl(var(--accent))] opacity-75"></div>
                        <div className="relative z-10 flex flex-col items-center h-full">
                            <Image
                                src={imageData.src}
                                width={imageData.width}
                                height={imageData.height}
                                alt={imageData.alt}
                                className="object-contain"
                                data-ai-hint={imageData.hint}
                            />
                            <h3 className="mt-4 text-xl font-bold font-headline text-foreground">{bonus.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground flex-grow">{bonus.description}</p>
                        </div>
                    </div>
                )
              })}
            </div>
            <div className="pt-8">
              <Button onClick={onCtaClick} size="lg" className="font-bold text-lg py-7 px-10">
                QUERO TODOS OS BÔNUS AGORA
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
