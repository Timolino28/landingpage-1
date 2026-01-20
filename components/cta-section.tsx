"use client";

import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
    return (
        <section id="contact" className="py-24 bg-lime-300 text-primary-foreground relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                    Ihr Grand Slam Offer wartet.
                </h2>
                <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
                    Hören Sie auf, sich über Preise zu streiten. Fangen Sie an, über Wert zu verkaufen. Ohne Risiko für Sie.
                </p>

                <div className="flex flex-col items-center gap-4">
                    <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" asChild>
                        <Link href="https://calendly.com/" target="_blank">
                            Jetzt Gespräch sichern
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <p className="text-sm opacity-80 mt-2">
                        Limitierte Plätze pro Monat. Keine Kosten, wenn Sie nicht zufrieden sind.
                    </p>
                </div>
            </div>
        </section>
    );
}
