import { Card } from '@/components/ui/card';

const modules = [
    { number: "01", title: "Módulo 01 – Introdução, conceitos de desbloqueio e como faturar já na primeira semana.", description: "Aprenda os fundamentos e comece a lucrar rapidamente." },
    { number: "02", title: "Módulo 02 – Passo a passo para desbloquear iPhones, Xiaomi, Samsung (incluindo modelos mais recentes).", description: "Técnicas específicas para todos os modelos de iPhone." },
    { number: "03", title: "Módulo 03 – Apresentação de softwares, ferramentas e servidores profissionais.", description: "Conheça as melhores ferramentas do mercado." },
    { number: "04", title: "Módulo 04 – Aulas práticas com suporte completo.", description: "Prática supervisionada com acompanhamento individual." },
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
        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
          {modules.map((module) => (
            <Card key={module.number} className="flex flex-col sm:flex-row items-start gap-6 p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-3xl font-headline flex-shrink-0">
                    {module.number}
                </div>
                <div className="grid gap-1">
                    <h3 className="text-xl font-bold font-headline">{module.title}</h3>
                    <p className="text-muted-foreground">{module.description}</p>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
