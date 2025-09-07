import { Rocket, Users, BarChart, Clock, ThumbsUp } from 'lucide-react';

export default function Community() {
    const stats = [
        { icon: Users, value: "+3.700", label: "Membros ativos crescendo mensalmente" },
        { icon: BarChart, value: "R$10.000+", label: "Faturamento médio por aluno" },
        { icon: Clock, value: "24/7", label: "Suporte disponível" },
        { icon: ThumbsUp, value: "99%", label: "Satisfação comprovada" },
    ];

    return (
        <section id="community" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Comunidade</div>
                        <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl">
                            <Rocket className="inline-block h-10 w-10 mr-2 text-primary" />
                            Comunidade Ativa Experts Destrava Tech
                        </h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Resultados comprovados por mais de 3.700 alunos. Junte-se à comunidade que mais cresce no Brasil.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center justify-center text-center gap-2">
                                <stat.icon className="h-10 w-10 text-primary" />
                                <div className="text-4xl font-bold font-headline">{stat.value}</div>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
