"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Rocket } from "lucide-react";

export function WhyUs() {
    return (
        <section id="why-us" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-tight">Unsere Mission: Mehr als nur Business</h2>
                        <p className="text-lg text-muted-foreground">
                            Wir sehen täglich großartige Dienstleister, die unterbewertet sind, weil ihr Marketing nicht "klickt". Das wollen wir ändern.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Unser Antrieb ist Neugier und der Wille zu helfen. Wir wollen lernen, was in Ihrer Branche funktioniert, und dieses Wissen direkt in Erfolg für Sie umwandeln. Deshalb arbeiten wir erfolgsbasiert.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-start gap-3">
                                <Heart className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Echte Partnerschaft</h4>
                                    <p className="text-sm text-muted-foreground">Kein "Dienstleister-Kunde"-Verhältnis, sondern ein Team.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Lightbulb className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold">Ständiges Lernen</h4>
                                    <p className="text-sm text-muted-foreground">Wir adaptieren Strategien aus anderen Branchen für Ihren Erfolg.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full" />
                        <div className="relative bg-background p-8 rounded-2xl shadow-xl border border-border">
                            <blockquote className="text-xl italic font-medium leading-relaxed">
                                "Small Business Owners sind das Rückgrat der Wirtschaft. Ihnen zu helfen, ihre PS auf die Straße zu bringen, ist unsere größte Motivation. Wenn Sie wachsen, wachsen wir mit."
                            </blockquote>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Rocket className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <div className="font-bold">Dennis & Team</div>
                                    <div className="text-sm text-muted-foreground">OfferArchitects</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
