import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { LockOpen, DollarSign, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Aprenda a Desbloquear Celulares
              </h1>
              <p className="text-xl font-bold text-primary uppercase tracking-wide">
                CHEGA DE DEPENDER DE TERCEIROS!
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Está cansado de pagar caro para terceiros desbloquearem iPhone, Xiaomi ou Samsung? Aprenda você mesmo e transforme cada desbloqueio em lucro direto no seu bolso!
              </p>
            </div>
            <ul className="grid gap-3 text-lg">
                <li className="flex items-center gap-3">
                    <LockOpen className="h-5 w-5 text-primary" />
                    <span className="font-medium">Desbloqueios práticos e rápidos</span>
                </li>
                <li className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span className="font-medium">Lucre até R$10.000,00</span>
                </li>
                <li className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="font-medium">Tudo em um único curso completo</span>
                </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="font-bold text-lg py-7 px-8">
                <Link href="#bonuses">QUERO ACESSAR OS BÔNUS EXCLUSIVOS</Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://picsum.photos/600/400"
            width={600}
            height={400}
            alt="Desbloqueio de celular"
            data-ai-hint="phone repair"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
