import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, CheckCircle, DollarSign } from 'lucide-react';

export default function ProblemSolution() {
    return (
        <section id="problem" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl">Por que você está perdendo dinheiro?</h2>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12 lg:gap-16 mt-12">
                    <Card className="text-center shadow-lg border-destructive/50">
                        <CardHeader>
                            <div className="mx-auto bg-destructive/10 rounded-full p-3 w-fit">
                                <XCircle className="h-8 w-8 text-destructive" />
                            </div>
                            <CardTitle className="font-headline pt-4">❌ O Problema</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Terceirizar desbloqueios = perder até 90% do lucro que poderia ser seu.</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center shadow-lg border-accent/50">
                        <CardHeader>
                            <div className="mx-auto bg-accent/10 rounded-full p-3 w-fit">
                                <CheckCircle className="h-8 w-8 text-accent" />
                            </div>
                            <CardTitle className="font-headline pt-4">✅ A Solução</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Essa é uma oportunidade ainda desconhecida: quem domina essas técnicas transforma desbloqueios em renda secreta e fatura muito.</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center shadow-lg border-primary/50">
                        <CardHeader>
                             <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                                <DollarSign className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline pt-4">💸 O Lucro</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">Cada aparelho = centenas de reais a mais no seu bolso, acumulando ganhos que podem surpreender já nos primeiros dias.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
