"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { getBonusSuggestion } from '@/app/actions';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  courseDescription: z.string().min(20, 'A descrição do curso precisa ter pelo menos 20 caracteres.'),
  currentBonuses: z.string().min(5, 'Liste pelo menos um bônus atual.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function BonusGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedBonuses, setSuggestedBonuses] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseDescription: 'Um curso completo que ensina a desbloquear celulares de várias marcas como iPhone, Samsung e Xiaomi. O objetivo é capacitar técnicos e entusiastas a realizar desbloqueios e aumentar sua renda.',
      currentBonuses: 'Acesso à comunidade, Suporte via WhatsApp, 3 meses de acesso',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setSuggestedBonuses(null);
    const result = await getBonusSuggestion(data);
    setIsLoading(false);

    if ('error' in result) {
      toast({
        variant: 'destructive',
        title: 'Erro ao gerar sugestões',
        description: result.error,
      });
    } else {
      setSuggestedBonuses(result.suggestedBonuses);
    }
  };

  return (
    <section id="ai-bonus" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Wand2 className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">Gerador de Bônus com IA</CardTitle>
            </div>
            <CardDescription>
              Use nossa IA para gerar novas ideias de bônus para o pacote premium e aumentar o valor percebido do seu curso.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="courseDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição do Curso</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Descreva o seu curso..." {...field} rows={4} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currentBonuses"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bônus Atuais (separados por vírgula)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Ex: Acesso à comunidade, Ebook..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                  Sugerir Novos Bônus
                </Button>
                {suggestedBonuses && (
                  <Alert variant="default" className="border-accent">
                    <AlertTitle className="font-bold text-accent">✨ Sugestões de Novos Bônus:</AlertTitle>
                    <AlertDescription>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {suggestedBonuses.split(',').map((bonus, i) => (
                            <li key={i}>{bonus.trim()}</li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </Alert>
                )}
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
