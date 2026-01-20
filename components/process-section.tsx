"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Kostenloses Erstgespräch",
        description: "Wir lernen uns kennen. Sie buchen einen Termin, und wir sprechen über Ihre aktuelle Situation, Ziele und Hürden. Völlig unverbindlich."
    },
    {
        number: "02",
        title: "Analyse & Deep Dive",
        description: "Ich analysiere Ihr bestehendes Angebot und identiziere die Lücken. Wo lassen Sie Geld liegen? Wo ist die Positionierung unscharf?"
    },
    {
        number: "03",
        title: "Die Grand Slam Strategie",
        description: "Ich entwickle ein maßgeschneidertes, unwiderstehliches Angebot für Sie. Value-based, nicht stundenbasiert. Copywriting inklusive."
    },
    {
        number: "04",
        title: "Zero Risk Deal",
        description: "Sie zahlen nur, wenn Sie mit dem Ergebnis zu 100% zufrieden sind. Kein Risiko für Sie. Das ist mein 'Skin in the Game'."
    }
];

export function ProcessSection() {
    return (
        <section id="process" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Der Weg zum Erfolg</h2>
                    <p className="text-lg text-muted-foreground">
                        Ein transparenter Prozess ohne versteckte Haken.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-background pt-4"
                        >
                            <div className="text-4xl font-extrabold text-primary/20 mb-4">{step.number}</div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
