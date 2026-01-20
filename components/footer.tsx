
import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 bg-background border-t">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-lg font-bold">
                        Offer<span className="text-primary">Architect</span>
                    </div>

                    <div className="flex gap-8 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-foreground">Impressum</Link>
                        <Link href="#" className="hover:text-foreground">Datenschutz</Link>
                        <Link href="#" className="hover:text-foreground">AGB</Link>
                    </div>

                    <div className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} OfferArchitect. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
