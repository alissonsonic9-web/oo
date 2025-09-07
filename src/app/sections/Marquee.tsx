export default function Marquee() {
    const text = "07 GARANTIA 7 DIAS • DINHEIRO DE VOLTA • SEM BUROCRACIA • SATISFAÇÃO GARANTIDA";
    return (
        <div className="bg-accent text-accent-foreground py-3">
            <div className="container mx-auto text-center font-bold tracking-wider text-sm">
                {text}
            </div>
        </div>
    );
}
