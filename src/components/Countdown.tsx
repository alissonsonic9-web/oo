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
        <div 
            className="bg-primary text-primary-foreground text-center py-4 text-xl font-bold animate-pulse-glow"
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 50
            }}
        >
            <span>A oferta termina em </span>
            <span className="font-mono tracking-wider">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
        </div>
    );
}
