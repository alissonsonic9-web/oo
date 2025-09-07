'use server';

/**
 * @fileOverview Suggests new bonus content for a premium package using AI.
 *
 * - suggestBonus - A function that suggests bonus content.
 * - SuggestBonusInput - The input type for the suggestBonus function.
 * - SuggestBonusOutput - The return type for the suggestBonus function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBonusInputSchema = z.object({
  courseDescription: z
    .string()
    .describe('The description of the course for which to suggest bonuses.'),
  currentBonuses: z
    .string()
    .describe('A comma separated list of the current bonuses offered.'),
});
export type SuggestBonusInput = z.infer<typeof SuggestBonusInputSchema>;

const SuggestBonusOutputSchema = z.object({
  suggestedBonuses: z
    .string()
    .describe('A comma separated list of suggested new bonuses.'),
});
export type SuggestBonusOutput = z.infer<typeof SuggestBonusOutputSchema>;

export async function suggestBonus(input: SuggestBonusInput): Promise<SuggestBonusOutput> {
  return suggestBonusFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBonusPrompt',
  input: {schema: SuggestBonusInputSchema},
  output: {schema: SuggestBonusOutputSchema},
  prompt: `You are an expert in creating online courses and maximizing their value.

  Given the following course description:
  {{courseDescription}}

  And the following current bonuses:
  {{currentBonuses}}

  Suggest some new bonuses that would be attractive to potential customers and increase the perceived value of the premium package. Return them as a comma separated list.
  `,
});

const suggestBonusFlow = ai.defineFlow(
  {
    name: 'suggestBonusFlow',
    inputSchema: SuggestBonusInputSchema,
    outputSchema: SuggestBonusOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
