import { Check } from 'lucide-react';
import Image from 'next/image';

const audienceList = [
    "Técnicos de manutenção de celulares",
    "Empreendedores que querem abrir seu próprio negócio",
    "Pessoas com aparelhos bloqueados",
    "Entusiastas de tecnologia que querem aprender algo lucrativo"
];

export default function Audience() {
    return (
        <section id="audience" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter font-headline md:text-4xl/tight">Para Quem É Esse Curso?</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        Se você se encaixa em algum desses perfis, este curso é a chave para sua independência financeira e técnica.
                    </p>
                    <ul className="grid gap-4 pt-4">
                        {audienceList.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                <span className="text-lg font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    src="https://picsum.photos/550/310"
                    width={550}
                    height={310}
                    alt="Target audience"
                    data-ai-hint="people learning"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
            </div>
        </section>
    );
}
