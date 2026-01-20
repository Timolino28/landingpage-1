"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingDown, Users, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const pains = [
    {
        icon: TrendingDown,
        title: "Preiskampf & Vergleichbarkeit",
        description: "Sie werden ständig mit billigeren Konkurrenten verglichen. Ihre Expertise wird nicht wahrgenommen, und Sie müssen Rabatte geben, um den Auftrag zu bekommen."
    },
    {
        icon: Users,
        title: "Leere Kalender",
        description: "Trotz exzellenter Arbeit bleiben die Anfragen aus. Oder schlimmer: Sie sprechen mit Interessenten, die sich Ihre Dienstleistung 'gerade nicht leisten können'."
    },
    {
        icon: AlertCircle,
        title: "Unsichtbarer Wert",
        description: "Ihr Angebot ist komplex und Kunden verstehen den wahren Nutzen nicht. Sie verkaufen Zeit gegen Geld, statt Ergebnisse zu verkaufen."
    }
];

export function PainSection() {
    return (
        <section id="pain" className="py-30 bg-muted/50 bg-primary">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Kommt Dir das bekannt vor?</h2>
                    <p className="text-lg text-muted-foreground">
                        Viele exzellente Dienstleister scheitern nicht an ihrer Kompetenz, sondern an der Verpackung ihres Angebots.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="h-full border-destructive/20 hover:border-destructive bg-black">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                                        <pain.icon className="h-6 w-6 text-destructive" />
                                    </div>
                                    <CardTitle className="text-xl text-white">{pain.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {pain.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
