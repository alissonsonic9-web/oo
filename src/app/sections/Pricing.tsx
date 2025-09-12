import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
    const premiumFeatures = [
        "Acesso vitalício completo",
        "Curso iPhone, Xiaomi e Samsung",
        "Desbloqueios de notebooks",
        "Curso de MDM completo",
        "Mentoria exclusiva para faturar 10k",
        "Suporte individual via AnyDesk",
        "Grupo VIP + servidores premium",
        "TODOS os 6 bônus inclusos (R$199,50)",
        "Garantia incondicional de 7 dias",
    ];

    return (
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">🔥 Escolha Seu Plano</h2>
                    <p className="rounded-full bg-destructive/80 px-4 py-1 text-sm font-bold text-destructive-foreground">Oferta limitada - últimas horas!</p>
                </div>
                <div className="mx-auto grid max-w-sm gap-8 pt-12 lg:max-w-4xl lg:grid-cols-2 items-start">
                    <Card className="flex flex-col shadow-md">
                        <CardHeader className="pb-4">
                            <CardTitle className="font-headline text-primary">🟠 Pacote Completo</CardTitle>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-extrabold tracking-tight font-headline">R$19,90</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Curso + Comunidade Destrava Tech</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 3 meses de acesso completo</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Suporte via WhatsApp</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Garantia de 7 dias</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Sem mensalidades</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" variant="outline">
                                <Link href="https://www.ggcheckout.com/checkout/v2/0R8oLC8xdLyK6h2NfxAb">ESCOLHER ESTE PLANO</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative flex flex-col border-2 border-accent shadow-2xl">
                        <div className="absolute -top-4 right-4 rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground flex items-center gap-1">
                            <Star className="h-4 w-4" /> MAIS ESCOLHIDO
                        </div>
                        <CardHeader className="pb-4">
                            <CardTitle className="font-headline text-accent">🔴 Pacote Premium</CardTitle>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-extrabold tracking-tight font-headline">R$29,90</span>
                                <span className="text-xl font-medium text-muted-foreground line-through">R$197,00</span>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                             <ul className="space-y-2 text-foreground">
                                {premiumFeatures.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 font-medium"><Check className="h-4 w-4 text-primary" /> {feature}</li>
                                ))}
                            </ul>
                            <p className="mt-4 text-center text-sm font-semibold text-accent">⚡ +600 alunos aprovam este plano!</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full font-bold" size="lg">
                                <Link href="#">GARANTIR MEU PREMIUM AGORA</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
