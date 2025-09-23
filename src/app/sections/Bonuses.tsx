"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import Link from "next/link";

const bonuses = [
    { title: "Bypass iOS 17.5", description: "Desbloqueio completo de todos os iPhones mais recentes" },
    { title: "FRP Xiaomi + Mi Cloud", description: "Métodos testados e definitivos para Xiaomi" },
    { title: "Suporte Individual via AnyDesk", description: "Atendimento remoto profissional quando precisar" },
    { title: "Servidores e Ferramentas Exclusivas", description: "Acesso aos melhores servidores do mercado" },
    { title: "Ferramentas para Assistências Técnicas", description: "Material profissional pronto para usar" },
    { title: "FRP em Um Clique", description: "Desbloqueio automático para Samsung, LG, Motorola" },
];

export default function Bonuses() {
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
            <div className="w-full max-w-4xl">
              <Accordion type="single" collapsible className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {bonuses.map((bonus, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg shadow-sm">
                          <AccordionTrigger className="flex items-start text-left gap-3 p-4 hover:no-underline">
                              <div className="flex items-start gap-3 flex-1">
                                <Gift className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <span className="font-semibold text-left flex-1">{bonus.title}</span>
                              </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 text-left ml-9">
                              <p className="text-sm text-muted-foreground">{bonus.description}</p>
                          </AccordionContent>
                      </AccordionItem>
                  ))}
              </Accordion>
            </div>
            <Button asChild size="lg" className="font-bold">
                <Link href="#pricing">QUERO TODOS OS BÔNUS AGORA</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
