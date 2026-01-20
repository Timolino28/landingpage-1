"use client";

import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="flex flex-col justify-center items-center relative pt-32 pb-20 overflow-hidden bg-primary h-screen">
            <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-20" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>

            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center rounded-full border border-lime-300 px-2.5 py-0.5 text-xs font-semibold">
                            <p className="text-lime-300">Ergebnisse statt "BlaBla"</p>
                        </div>
                        <h1 className="text-4xl leading-18 md:text-7xl font-extrabold text-white py-5">
                            Verkaufe <span className="text-lime-500 italic">Wert</span>, <br /> nicht Resultate.
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Wir helfen Dir, den Preiskampf zu verlassen. Durch ein Angebot, das auf Mehrwert für Deine Kunden setzt und Dich somit klar von Deiner Konkurrenz absetzt.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10"
                    >
                        <Button size="lg" className="h-12 px-8 text-lg text-black bg-lime-300" asChild>
                            <Link href="#contact">
                                Kostenloses Erstgespräch buchen
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="pt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
                    >
                        <div className="flex items-center gap-2 text-white">
                            <CheckCircle2 className="h-4 w-4" />
                            Risikolos
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <CheckCircle2 className="h-4 w-4" />
                            Zahlung nur bei Zufriedenheit
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <CheckCircle2 className="h-4 w-4" />
                            Personalisierter Ansatz
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
