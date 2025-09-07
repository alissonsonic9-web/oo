import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">🎁 Bônus Exclusivos</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        No plano premium, você ganha 6 bônus que valem mais que o próprio curso:
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {bonuses.map((bonus, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <Gift className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
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
            <div className="flex justify-center">
                 <Image
                    src="https://picsum.photos/550/550"
                    width={550}
                    height={550}
                    alt="Bônus"
                    data-ai-hint="gift box"
                    className="mx-auto rounded-xl object-cover"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
