"use client";

import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';

const maleNames = [
    "Gustavo", "Lucas", "Ricardo", "Pedro", "Carlos", "João", "Rafael", "Thiago", 
    "Bruno", "Leandro", "Felipe", "Daniel", "Eduardo", "Marcelo", "André", "Rodrigo",
    "Vinicius", "Alexandre", "Fernando", "Diego", "Márcio", "Sérgio", "Paulo", "Antônio"
];
const femaleNames = ["Mariana", "Fernanda", "Juliana", "Ana", "Beatriz"];

const locations = [
    "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", "Salvador, BA",
    "Curitiba, PR", "Porto Alegre, RS", "Fortaleza, CE", "Brasília, DF",
    "Recife, PE", "Manaus, AM", "Goiânia, GO", "Belém, PA"
];

export default function SocialProof() {
    const [currentPurchase, setCurrentPurchase] = useState<{ name: string; location: string } | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [purchaseCount, setPurchaseCount] = useState(0);

    useEffect(() => {
        const showRandomPurchase = () => {
            const isMale = Math.random() < 0.9;
            const name = isMale 
                ? maleNames[Math.floor(Math.random() * maleNames.length)]
                : femaleNames[Math.floor(Math.random() * femaleNames.length)];
            
            const location = locations[Math.floor(Math.random() * locations.length)];

            setCurrentPurchase({ name, location });
            setPurchaseCount((prevCount) => prevCount + 1);
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
            }, 5000);
        };

        const initialTimeout = setTimeout(showRandomPurchase, 3000);
        const interval = setInterval(showRandomPurchase, 20000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    if (!currentPurchase) {
        return null;
    }

    const plan = purchaseCount % 8 === 0 ? "Plano Básico" : "Plano Premium";

    return (
        <div 
            className={`fixed bottom-4 left-4 z-50 w-80 rounded-xl bg-card shadow-2xl border border-border/50 p-4 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'animate-fade-out-down'
            }`}
        >
            <div className="flex items-start gap-4">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <p className="font-bold text-sm text-foreground">
                        {currentPurchase.name} de {currentPurchase.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Acabou de adquirir o <span className={`font-bold ${plan === "Plano Básico" ? "text-foreground" : "text-primary"}`}>{plan}</span>
                    </p>
                    <p className="text-xs text-muted-foreground/80 mt-1">
                        Há poucos segundos
                    </p>
                </div>
            </div>
        </div>
    );
}
