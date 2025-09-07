import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LockOpen, DollarSign, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative w-full py-20 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.postimg.cc/d0mZ2C11/Chat-GPT-Image-7-de-set-de-2025-14-00-45-Editado.png')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
              Aprenda a Desbloquear Celulares
            </h1>
            <p className="text-xl font-bold text-primary uppercase tracking-wide">
              CHEGA DE DEPENDER DE TERCEIROS!
            </p>
            <p className="max-w-[700px] text-lg text-gray-200 md:text-xl">
              Está cansado de pagar caro para terceiros desbloquearem iPhone, Xiaomi ou Samsung? Aprenda você mesmo e transforme cada desbloqueio em lucro direto no seu bolso!
            </p>
          </div>
          <ul className="grid gap-4 text-lg sm:grid-cols-3 text-gray-200 w-full max-w-5xl">
              <li className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <LockOpen className="h-5 w-5 text-primary" />
                  <span className="font-medium">Desbloqueios práticos e rápidos</span>
              </li>
              <li className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span className="font-medium">Lucre até R$10.000,00</span>
              </li>
              <li className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="font-medium">Tudo em um único curso completo</span>
              </li>
          </ul>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <Button asChild size="lg" className="font-bold text-lg py-7 px-8">
              <Link href="#pricing">QUERO APRENDER AGORA!</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
