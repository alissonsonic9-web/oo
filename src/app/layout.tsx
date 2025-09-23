import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Countdown from '@/components/Countdown';
import SocialProof from '@/components/SocialProof';

export const metadata: Metadata = {
  title: 'Destrava Tech',
  description: 'Aprenda a Desbloquear Celulares e transforme conhecimento em lucro.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Countdown />
        {children}
        <Toaster />
        <SocialProof />
      </body>
    </html>
  );
}
