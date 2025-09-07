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
                    No plano premium, você ganha 6 bônus que valem mais que o próprio curso:
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
                {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-start text-left gap-3 p-4 rounded-lg bg-secondary">
                        <Gift className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">{bonus.title}</h3>
                            <p className="text-sm text-muted-foreground">{bonus.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Button asChild size="lg" className="font-bold">
                <Link href="#pricing">QUERO TODOS OS BÔNUS AGORA</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
