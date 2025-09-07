import { ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Guarantee() {
    return (
        <section id="guarantee" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="flex justify-center order-last lg:order-first">
                        <Image
                            src="https://picsum.photos/500/300"
                            width={500}
                            height={300}
                            alt="Garantia"
                            data-ai-hint="guarantee seal"
                            className="mx-auto rounded-xl object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Garantia Incondicional de 7 Dias</h2>
                        <p className="text-muted-foreground md:text-xl">
                            Se dentro de 7 dias você não ficar satisfeito, devolvemos 100% do valor.
                        </p>
                        <p className="font-semibold text-primary text-lg">Sem perguntas. Sem burocracia.</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <ShieldCheck className="h-5 w-5 text-accent" />
                            <span>Sua compra é 100% segura.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
