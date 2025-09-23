"use client";

import { CheckCircle2 } from 'lucide-react';
import Image from "next/image";
import placeholderImages from '@/lib/placeholder-images.json';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const audienceList = [
    "Técnicos de manutenção de celulares",
    "Empreendedores que querem abrir seu próprio negócio",
    "Pessoas com aparelhos bloqueados",
    "Entusiastas de tecnologia que querem aprender algo lucrativo"
];

export default function Audience() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

    return (
        <section id="audience" ref={sectionRef} className={cn("w-full py-12 md:py-24 lg:py-32 bg-secondary/50 transition-opacity duration-1000 ease-in", isVisible ? 'opacity-100' : 'opacity-0')}>
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className={cn("space-y-6 transition-all duration-700 ease-out", isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0')}>
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
                    <div className={cn("relative group overflow-hidden rounded-xl h-full transition-all duration-700 ease-out delay-200", isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0')}>
                        <Image
                            src={placeholderImages['audience-person-using-phone'].src}
                            width={placeholderImages['audience-person-using-phone'].width}
                            height={placeholderImages['audience-person-using-phone'].height}
                            alt={placeholderImages['audience-person-using-phone'].alt}
                            data-ai-hint={placeholderImages['audience-person-using-phone'].hint}
                            className="mx-auto rounded-xl object-cover shadow-lg h-full w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
