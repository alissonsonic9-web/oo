'use server';

import { suggestBonus, type SuggestBonusInput, type SuggestBonusOutput } from '@/ai/flows/suggest-bonus';

export async function getBonusSuggestion(input: SuggestBonusInput): Promise<SuggestBonusOutput | { error: string }> {
    try {
        const result = await suggestBonus(input);
        return result;
    } catch (e: any) {
        console.error(e);
        return { error: e.message || 'Falha ao obter sugestão.' };
    }
}
