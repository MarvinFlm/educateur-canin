"use client";

import HeroSecondary from "@/components/Layout/HeroSecondary";
import MyMethodSection from "@/components/Sections/MyMethodSection";
import PresentationCTA from "@/components/Sections/PresentationCTA";
import WhoAmISection from "@/components/Sections/WhoAmISection";
import { motion } from "framer-motion";

const FadeIn = motion.div;

export default function PresentationPage() {
  return (
    <>
      <FadeIn
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSecondary
          title="Rencontrez Maë"
          subtitle="Formé chez Esprit Dog, passionné depuis l’enfance par les animaux, je suis un éducateur canin qui a à cœur de vous aider à créer une relation épanouie avec votre compagnon à quatre pattes. 🐾"
        />
      </FadeIn>

      <FadeIn
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <WhoAmISection />
      </FadeIn>

      <FadeIn
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MyMethodSection />
      </FadeIn>

      <FadeIn
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <PresentationCTA />
      </FadeIn>
    </>
  );
}
