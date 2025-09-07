import { Check } from 'lucide-react';
import Image from "next/image";

const audienceList = [
    "Técnicos de manutenção de celulares",
    "Empreendedores que querem abrir seu próprio negócio",
    "Pessoas com aparelhos bloqueados",
    "Entusiastas de tecnologia que querem aprender algo lucrativo"
];

export default function Audience() {
    return (
        <section id="audience" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter font-headline md:text-4xl/tight">Para Quem É Esse Curso?</h2>
                            <p className="text-muted-foreground md:text-xl/relaxed">
                                Se você se encaixa em algum desses perfis, este curso é a chave para sua independência financeira e técnica.
                            </p>
                        </div>
                        <ul className="grid gap-4 sm:grid-cols-2">
                            {audienceList.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="https://i.postimg.cc/K8yRn54H/Chat-GPT-Image-7-de-set-de-2025-12-25-30.png"
                            width={550}
                            height={400}
                            alt="Para quem é o curso"
                            data-ai-hint="person using phone"
                            className="mx-auto rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
