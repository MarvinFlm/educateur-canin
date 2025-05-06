"use client";

import HeroSection from "@/components/Layout/HeroSection";
import ActivitySection from "@/components/Sections/ActivitySection";
import ContactSection from "@/components/Sections/ContactSection";
import PricingSection from "@/components/Sections/PricingSection";
import { Box, Container } from "@mantine/core";

export default function HomePage() {
  return (
    <Box style={{ backgroundColor: "#FEFAE0" }}>
      <HeroSection
        title="✨ MON MAÎTRE & MOI ✨"
        subtitle="L'école du maître et du chien — pour une relation épanouie et bienveillante 🐾"
        image={{ src: "/images/hero-dog.png" }}
        buttons={[
          { label: "Réserver une séance", href: "/contact" },
          {
            label: "Voir les activités",
            href: "/activites",
            variant: "secondary",
          },
        ]}
      />

      {/* 🔹 SECTION ACTIVITÉS */}
      <Container size="lg" py="xl">
        <ActivitySection />
      </Container>

      {/* 🔸 SECTION TARIFS */}

      <PricingSection />

      {/* ✉️ SECTION CONTACT */}
      <Container size="md" py="xl">
        <ContactSection />
      </Container>
    </Box>
  );
}
