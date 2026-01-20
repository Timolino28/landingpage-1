"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          Offer<span className="text-primary">Architect</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#pain" className="hover:text-primary transition-colors">
            Herausforderungen
          </Link>
          <Link href="#process" className="hover:text-primary transition-colors">
            Prozess
          </Link>
          <Link href="#why-us" className="hover:text-primary transition-colors">
            Über uns
          </Link>
        </div>

        <Button asChild>
          <Link href="#contact">Kostenloses Erstgespräch</Link>
        </Button>
      </div>
    </motion.nav>
  );
}
