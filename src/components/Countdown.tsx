"use client";

import { useState, useEffect } from 'react';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(10 * 60);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="bg-primary text-primary-foreground text-center py-3 text-lg sticky top-0 z-50 font-bold animate-pulse-glow">
            <span>A oferta termina em </span>
            <span className="font-mono tracking-wider">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
        </div>
    );
}
