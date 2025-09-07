import { Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Smartphone className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold font-headline">Unlocker Pro</span>
        </Link>
        <Button asChild>
          <Link href="#pricing">Quero Acessar</Link>
        </Button>
      </div>
    </header>
  );
}
