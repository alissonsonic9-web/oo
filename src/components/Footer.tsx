"use client";

import { Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-center md:flex-row md:px-6">
        <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold font-headline">Unlocker Pro</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {year} Unlocker Pro. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
