"use client";
import { Users, BarChart, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const barChartData = [
    { month: 'MAIO', members: 2800, fill: "hsl(var(--chart-4))" },
    { month: 'JUNHO', members: 3100, fill: "hsl(var(--chart-2))" },
    { month: 'JULHO', members: 3300, fill: "hsl(var(--chart-1))" },
    { month: 'AGOSTO', members: 3500, fill: "hsl(var(--chart-5))" },
    { month: 'HOJE', members: 3700, fill: "hsl(var(--primary))" },
];

const satisfactionData = [{ name: 'Satisfação', value: 95, fill: 'hsl(var(--primary))' }];
const retentionData = [{ name: 'Retenção', value: 87, fill: 'hsl(var(--primary))' }];
const supportData = [{ name: 'Suporte', value: 100, fill: 'hsl(var(--primary))' }];

const stats = [
    { icon: Users, value: "+3.700", label: "Membros Ativos", sublabel: "+15% este mês" },
    { icon: BarChart, value: "R$10.000+", label: "Faturamento Médio", sublabel: "+23% este mês" },
    { icon: Clock, value: "24/7", label: "Suporte", sublabel: "100% disponível" },
];

const RadialChartComponent = ({ data, label }: { data: {name: string, value: number, fill: string}[], label: string }) => (
    <div className="flex flex-col items-center justify-center">
        <div className="relative h-36 w-36 sm:h-40 sm:w-40">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="80%"
                    outerRadius="100%"
                    data={data}
                    startAngle={90}
                    endAngle={-270}
                >
                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                    <RadialBar
                        background={{ fill: 'hsla(var(--muted-foreground), 0.1)' }}
                        dataKey="value"
                        cornerRadius={30}
                        angleAxisId={0}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-bold font-headline text-foreground">{data[0].value}%</span>
            </div>
        </div>
        <p className="mt-2 text-sm font-semibold text-muted-foreground">{label}</p>
    </div>
);


export default function Community() {
    return (
        <section id="community" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/80">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-2 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Conheça nossa Comunidade</h2>
                    <p className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Atualizado em tempo real</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="flex flex-col gap-8">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <Card key={index} className="bg-card/95 backdrop-blur-sm border-border/50 text-center shadow-lg">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="flex flex-col items-center gap-1 text-base font-medium text-muted-foreground">
                                            {stat.label}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col items-center gap-1">
                                        <div className="text-4xl font-extrabold font-headline">{stat.value}</div>
                                        <p className="text-xs text-primary font-semibold">{stat.sublabel}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        
                        {/* Bar Chart */}
                        <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg p-4">
                            <h3 className="text-lg font-bold font-headline mb-4 text-left">Crescimento de Membros</h3>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RechartsBarChart data={barChartData} margin={{ top: 20, right: 0, left: -20, bottom: 5 }} barGap={12} barCategoryGap="20%">
                                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis
                                            stroke="hsl(var(--muted-foreground))"
                                            fontSize={12}
                                            tickLine={false}
                                            axisLine={false}
                                            tickFormatter={(value) => `${value}`}
                                            domain={[0, 'dataMax + 300']}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: "hsl(var(--background))",
                                                border: "1px solid hsl(var(--border))",
                                                borderRadius: "var(--radius)"
                                            }}
                                            labelStyle={{color: "hsl(var(--foreground))"}}
                                            cursor={{ fill: 'hsla(var(--muted), 0.5)' }}
                                        />
                                        <Bar dataKey="members" radius={[10, 10, 0, 0]} />
                                    </RechartsBarChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>
                        
                        {/* Radial Charts */}
                        <div className="grid grid-cols-3 gap-4">
                           <RadialChartComponent data={satisfactionData} label="Satisfação" />
                           <RadialChartComponent data={retentionData} label="Retenção" />
                           <RadialChartComponent data={supportData} label="Suporte" />
                        </div>

                    </div>
                    
                    {/* Community Images */}
                     <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-md mx-auto">
                        <CarouselContent>
                            <CarouselItem className="basis-10/12 md:basis-11/12">
                                <Image 
                                    src="https://i.postimg.cc/d05LnVmg/316058478-870152138-expert-02-1.jpg"
                                    width={400}
                                    height={600}
                                    alt="Comunidade Destrava Tech"
                                    data-ai-hint="community chat screenshot"
                                    className="rounded-xl shadow-2xl object-cover w-full h-auto border-4 border-accent"
                                />
                            </CarouselItem>
                            <CarouselItem className="basis-10/12 md:basis-11/12">
                                <Image 
                                    src="https://i.postimg.cc/Qt15mWSS/Design-sem-nome.png"
                                    width={400}
                                    height={600}
                                    alt="Depoimento de aluno"
                                    data-ai-hint="testimonial screenshot"
                                    className="rounded-xl shadow-2xl object-cover w-full h-auto border-4 border-accent"
                                />
                            </CarouselItem>
                             <CarouselItem className="basis-10/12 md:basis-11/12">
                                <Image 
                                    src="https://i.postimg.cc/HjGhK5Cx/Design-sem-nome-1.png"
                                    width={400}
                                    height={600}
                                    alt="Depoimento de aluno 2"
                                    data-ai-hint="testimonial screenshot"
                                    className="rounded-xl shadow-2xl object-cover w-full h-auto border-4 border-accent"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
