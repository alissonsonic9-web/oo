"use client";
import { Users, BarChart, Clock, ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import Image from 'next/image';

const chartData = [
    { month: 'Jan', members: 1200 },
    { month: 'Fev', members: 1800 },
    { month: 'Mar', members: 2500 },
    { month: 'Abr', members: 3100 },
    { month: 'Hoje', members: 3700 },
];

export default function Community() {
    const stats = [
        { icon: Users, value: "+3.700", label: "Membros Ativos", sublabel: "+15% este mês" },
        { icon: BarChart, value: "R$10.000+", label: "Faturamento Médio", sublabel: "+23% este mês" },
        { icon: Clock, value: "24/7", label: "Suporte", sublabel: "100% disponível" },
    ];

    return (
        <section id="community" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Painel da Comunidade</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">
                        Resultados e crescimento em tempo real. Junte-se à comunidade que mais cresce no Brasil.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="flex flex-col gap-8">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 text-center">
                                    <CardHeader>
                                        <CardTitle className="flex flex-col items-center gap-2 text-base font-medium text-muted-foreground">
                                            <stat.icon className="h-6 w-6 text-primary" />
                                            <span>{stat.label}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col items-center gap-1">
                                        <div className="text-4xl font-extrabold font-headline">{stat.value}</div>
                                        <p className="text-xs text-primary font-semibold">{stat.sublabel}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                         <div className="text-left space-y-4">
                            <h3 className="text-2xl font-bold font-headline text-primary">Nossa Comunidade Não Para de Crescer</h3>
                            <p className="text-muted-foreground">
                                Somos mais de 3.700 membros ativos, com um faturamento médio que ultrapassa os R$10.000,00 e um suporte dedicado que garante 99% de satisfação. O crescimento é constante e os resultados são reais.
                            </p>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                 <div className="p-4 bg-card rounded-lg">
                                     <div className="text-3xl font-bold font-headline">99%</div>
                                     <p className="text-sm font-medium text-muted-foreground">Satisfação</p>
                                 </div>
                                 <div className="p-4 bg-card rounded-lg">
                                     <div className="text-3xl font-bold font-headline">97%</div>
                                     <p className="text-sm font-medium text-muted-foreground">Retenção</p>
                                 </div>
                                 <div className="p-4 bg-card rounded-lg">
                                     <div className="text-3xl font-bold font-headline">100%</div>
                                     <p className="text-sm font-medium text-muted-foreground">Suporte</p>
                                 </div>
                            </div>
                        </div>

                    </div>
                    
                    {/* Community Image */}
                    <div className="flex items-center justify-center">
                        <Image 
                            src="https://i.postimg.cc/d05LnVmg/316058478-870152138-expert-02-1.jpg"
                            width={500}
                            height={750}
                            alt="Comunidade Destrava Tech"
                            data-ai-hint="community chat screenshot"
                            className="rounded-xl shadow-2xl object-cover max-h-[600px] w-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
