import { ShieldCheck } from "lucide-react";

export default function Guarantee() {
    return (
        <section id="guarantee" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="flex justify-center items-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin [animation-duration:20s]">
                                <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                <text>
                                    <textPath href="#circlePath" className="text-sm font-bold uppercase tracking-wider fill-current text-muted-foreground">
                                        GARANTIA DE 7 DIAS • GARANTIA GARANTIDA • GARANTIA DE 7 DIAS • GARANTIA GARANTIDA •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 md:w-56 md:h-56 bg-primary rounded-full flex items-center justify-center">
                                    <span className="text-6xl md:text-7xl font-bold text-primary-foreground">07</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 text-center md-text-left">
                        <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-4xl">Garantia Incondicional de 7 Dias</h2>
                        <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto md:mx-0">
                            Se dentro de 7 dias você não ficar satisfeito, devolvemos 100% do valor.
                        </p>
                        <p className="font-semibold text-primary text-lg">Sem perguntas. Sem burocracia.</p>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                            <ShieldCheck className="h-5 w-5 text-accent" />
                            <span>Sua compra é 100% segura.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
