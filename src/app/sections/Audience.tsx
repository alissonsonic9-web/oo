import { CheckCircle2 } from 'lucide-react';
import Image from "next/image";

const audienceList = [
    "Técnicos de manutenção de celulares",
    "Empreendedores que querem abrir seu próprio negócio",
    "Pessoas com aparelhos bloqueados",
    "Entusiastas de tecnologia que querem aprender algo lucrativo"
];

export default function Audience() {
    return (
        <section id="audience" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tighter font-headline md:text-4xl/tight text-foreground">
                                Para Quem É o Curso <span className="text-primary">Destrava Tech?</span>
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed">
                                Se você se encaixa em algum desses perfis, este curso é a chave para sua independência financeira e técnica.
                            </p>
                        </div>
                        <ul className="grid gap-4 sm:grid-cols-1">
                            {audienceList.map((item, index) => (
                                <li key={index} className="flex items-center gap-4 group cursor-default">
                                    <div className="flex-shrink-0 rounded-full bg-primary/10 p-2 group-hover:bg-primary transition-colors duration-300">
                                        <CheckCircle2 className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                    </div>
                                    <span className="font-medium text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative flex justify-center group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-tilt"></div>
                        <div className="relative">
                            <Image
                                src="https://i.postimg.cc/K8yRn54H/Chat-GPT-Image-7-de-set-de-2025-12-25-30.png"
                                width={550}
                                height={400}
                                alt="Para quem é o curso"
                                data-ai-hint="person using phone"
                                className="mx-auto rounded-xl object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                            />
                             <div className="absolute inset-0 bg-black/10 rounded-xl group-hover:bg-black/0 transition-all duration-300"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}