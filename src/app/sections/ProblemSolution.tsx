import { XCircle, CheckCircle, DollarSign } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function ProblemSolution() {
    const items = [
        {
            icon: XCircle,
            title: "O Problema",
            description: "Terceirizar desbloqueios = perder até 90% do lucro que poderia ser seu.",
            iconColor: "text-destructive"
        },
        {
            icon: CheckCircle,
            title: "A Solução",
            description: "Essa é uma oportunidade ainda desconhecida: quem domina essas técnicas transforma desbloqueios em renda secreta e fatura muito.",
            iconColor: "text-accent"
        },
        {
            icon: DollarSign,
            title: "O Lucro",
            description: "Cada aparelho = centenas de reais a mais no seu bolso, acumulando ganhos que podem surpreender já nos primeiros dias.",
            iconColor: "text-primary"
        }
    ];

    return (
        <section id="problem" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-8 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl">Por que você está perdendo dinheiro?</h2>
                    </div>
                    <div className="w-full max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 rounded-xl bg-card shadow-lg p-8 gap-8 md:gap-4">
                            {items.map((item, index) => (
                                <div key={index} className="flex flex-col items-center text-center relative">
                                    <div className={`mb-4 rounded-full p-3 bg-secondary`}>
                                        <item.icon className={`h-10 w-10 ${item.iconColor}`} />
                                    </div>
                                    <h3 className="text-xl font-bold font-headline mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                    {index < items.length - 1 && (
                                        <Separator orientation="vertical" className="hidden md:block absolute right-0 top-1/4 h-1/2 -mr-2" />
                                    )}
                                     {index < items.length - 1 && (
                                        <Separator orientation="horizontal" className="md:hidden mt-8" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}