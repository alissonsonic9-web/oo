"use client";

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
    from: number;
    to: number;
    duration?: number;
    isVisible: boolean;
    prefix?: string;
    suffix?: string;
    formatter?: (value: number) => string;
}

const easeOutExpo = (t: number) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export default function AnimatedCounter({ 
    from = 0, 
    to, 
    duration = 2500, 
    isVisible,
    prefix = '',
    suffix = '',
    formatter = (value) => Math.round(value).toLocaleString('pt-BR')
}: AnimatedCounterProps) {
    const [count, setCount] = useState(from);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isVisible && !hasAnimated.current) {
            hasAnimated.current = true;
            let start: number | null = null;

            const step = (timestamp: number) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const progressRatio = Math.min(progress / duration, 1);
                const easedProgress = easeOutExpo(progressRatio);
                const currentCount = from + (to - from) * easedProgress;

                setCount(currentCount);

                if (progress < duration) {
                    requestAnimationFrame(step);
                } else {
                    setCount(to);
                }
            };
            requestAnimationFrame(step);
        }
    }, [isVisible, from, to, duration]);
    
    return <span>{prefix}{formatter(count)}{suffix}</span>;
}
