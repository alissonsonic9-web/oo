import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    { question: "Preciso de experiência prévia?", answer: "Não. O curso foi desenhado para levar qualquer pessoa do zero ao nível profissional, com aulas passo a passo, mesmo que você nunca tenha aberto um celular antes." },
    { question: "Funciona para todos os modelos de celular?", answer: "Sim, o curso cobre técnicas para as principais marcas e modelos do mercado, incluindo iPhone, Samsung, Xiaomi, LG e Motorola. Você aprenderá os métodos universais e os específicos de cada sistema." },
    { question: "O suporte é de verdade?", answer: "Sim, e é nosso grande diferencial. Oferecemos suporte 24h via WhatsApp para dúvidas rápidas e suporte individual remoto via AnyDesk para questões mais complexas, disponível no plano Premium." },
    { question: "Quanto tempo até eu começar a lucrar?", answer: "Você não precisa esperar meses para ver resultado. Muitos dos nossos alunos já começam a faturar em menos de 7 dias, aplicando as técnicas dos primeiros módulos." },
];

export default function Faq() {
    return (
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">❓ Perguntas Frequentes</h2>
                </div>
                <div className="mx-auto max-w-3xl pt-12">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
