import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from 'lucide-react';

const modules = [
    { 
        number: "01", 
        title: "Introdução e Faturamento Rápido", 
        description: "Aprenda os conceitos de desbloqueio e como faturar já na primeira semana.",
        topics: [
            "Introdução ao mundo dos desbloqueios",
            "Panorama do mercado e oportunidades",
            "Ferramentas básicas necessárias",
            "Como precificar seus serviços"
        ]
    },
    { 
        number: "02", 
        title: "Desbloqueio Passo a Passo", 
        description: "Passo a passo para desbloquear iPhones, Xiaomi, Samsung (incluindo modelos mais recentes).",
        topics: [
            "Técnicas para iPhone (todos os modelos)",
            "Métodos para aparelhos Xiaomi",
            "Soluções para dispositivos Samsung",
            "Lidando com as atualizações mais recentes"
        ]
    },
    { 
        number: "03", 
        title: "Ferramentas Profissionais", 
        description: "Apresentação de softwares, ferramentas e servidores profissionais.",
        topics: [
            "Conhecendo os principais softwares",
            "Acesso a servidores exclusivos",
            "Uso de ferramentas de hardware",
            "Otimizando seu setup de trabalho"
        ]
    },
    { 
        number: "04", 
        title: "Aulas Práticas com Suporte", 
        description: "Aulas práticas com suporte completo.",
        topics: [
            "Desbloqueios ao vivo com supervisão",
            "Resolução de problemas comuns",
            "Sessões de tira-dúvidas",
            "Suporte individual para casos complexos"
        ]
    },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Conteúdo do Curso</div>
            <h2 className="text-3xl font-bold tracking-tighter font-headline sm:text-5xl">O Que Você Vai Aprender no Curso</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Um programa completo e prático para transformar iniciantes em especialistas:
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl pt-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {modules.map((module) => (
              <AccordionItem key={module.number} value={`item-${module.number}`} className="border-b-0 rounded-lg bg-card shadow-md data-[state=open]:shadow-xl transition-shadow">
                <AccordionTrigger className="flex items-center gap-4 p-6 text-left hover:no-underline">
                  <div className="flex h-16 w-16 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold text-3xl font-headline flex-shrink-0">
                      {module.number}
                  </div>
                  <div className="grid gap-1 flex-1">
                      <h3 className="text-xl font-bold font-headline text-primary">{`Módulo ${module.number} - ${module.title}`}</h3>
                      <p className="text-muted-foreground text-sm">{module.description}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <div className="border-l-2 border-primary ml-8 pl-8">
                    <ul className="space-y-3">
                      {module.topics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}