"use client";

import { CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const purchases = [
    { name: "Gustavo", location: "São Paulo, SP" },
    { name: "Mariana", location: "Rio de Janeiro, RJ" },
    { name: "Lucas", location: "Belo Horizonte, MG" },
    { name: "Fernanda", location: "Salvador, BA" },
    { name: "Ricardo", location: "Curitiba, PR" },
    { name: "Juliana", location: "Porto Alegre, RS" },
    { name: "Pedro", location: "Fortaleza, CE" },
    { name: "Ana", location: "Brasília, DF" },
    { name: "Carlos", location: "Recife, PE" },
    { name: "Beatriz", location: "Manaus, AM" },
];

export default function SocialProof() {
    const [currentPurchase, setCurrentPurchase] = useState<{ name: string; location: string } | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showRandomPurchase = () => {
            const randomIndex = Math.floor(Math.random() * purchases.length);
            setCurrentPurchase(purchases[randomIndex]);
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
            }, 5000); // Fica visível por 5 segundos
        };

        // Mostra a primeira notificação após um pequeno delay inicial
        const initialTimeout = setTimeout(showRandomPurchase, 3000);

        // Define o intervalo para mostrar as próximas notificações
        const interval = setInterval(showRandomPurchase, 10000); // A cada 10 segundos

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    if (!currentPurchase) {
        return null;
    }

    return (
        <div 
            className={`fixed bottom-4 left-4 z-50 w-80 rounded-xl bg-card shadow-2xl border border-border/50 p-4 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'animate-fade-out-down'
            }`}
        >
            <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <p className="font-bold text-sm text-foreground">
                        {currentPurchase.name} de {currentPurchase.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Acabou de adquirir o <span className="font-bold text-primary">Plano Premium</span>
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-1">
                        Há poucos segundos
                    </p>
                </div>
            </div>
        </div>
    );
}
