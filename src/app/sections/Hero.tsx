import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
              Descubra como transformar desbloqueios de celulares <span className="text-red-500">em uma renda de mais de R$10.000/mês</span>
            </h1>
            <p className="max-w-[700px] text-lg text-gray-200 md:text-xl">
              Está cansado de pagar caro para terceiros desbloquearem iPhone, Xiaomi ou Samsung? Aprenda você mesmo e transforme cada desbloqueio em lucro direto no seu bolso!
            </p>
          </div>
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
