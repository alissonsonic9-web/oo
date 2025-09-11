"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Em 2 semanas já faturei R$2.000. O curso é completo e o suporte é incrível!",
    name: "João Silva",
    title: "Técnico em Eletrônicos",
    avatar: "JS"
  },
  {
    quote: "Deixei de pagar terceiros e agora lucro R$500 por iPhone desbloqueado. Valeu cada centavo!",
    name: "Maria Santos",
    title: "Empreendedora",
    avatar: "MS"
  },
  {
    quote: "Multipliquei meus ganhos por 3. Agora ofereço desbloqueio como serviço premium.",
    name: "Carlos Oliveira",
    title: "Assistência Técnica",
    avatar: "CO"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">📢 Resultados Reais</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Histórias de alunos que transformaram conhecimento em renda real.
            </p>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto pt-12">
            <div className="aspect-video overflow-hidden rounded-xl border-4 border-primary shadow-2xl">
                <video
                    src="https://www.dropbox.com/scl/fi/rec5sgbstyyivnmdtuaop/V-deo-sem-t-tulo-Feito-com-o-Clipchamp-1.mp4?rlkey=6djm1xi0wnfxgdhvt549g7aii&st=bpgao74r&raw=1"
                    controls
                    className="w-full h-full object-cover"
                >
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </div>
        </div>
        
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto pt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full shadow-lg">
                    <CardContent className="p-6 flex-1">
                      <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter className="p-6 bg-background">
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={`https://i.pravatar.cc/40?u=${testimonial.name}`} />
                                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                        </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
        <div className="text-center mt-8">
            <p className="font-bold text-lg text-primary">+1.127 alunos já aprovam</p>
            <p className="text-muted-foreground">Junte-se à comunidade que mais cresce no Brasil</p>
        </div>
      </div>
    </section>
  );
}
