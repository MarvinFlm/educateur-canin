"use client";

import {
  Box,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";

const tarifs = [
  {
    title: "Bilan comportemental",
    prix: "40€",
    description:
      "Découverte de l’univers du chien et de son maître. Détermination des besoins, du nombre et de la fréquence des séances.",
  },
  {
    title: "Cours chiot",
    prix: "35€",
    description:
      "Acquisition de la propreté, ordres de base, marche en laisse et gestion des émotions. Adapté aux jeunes chiots.",
  },
  {
    title: "Adoption / chiot à venir",
    prix: "40€",
    description:
      "Préparer l’arrivée d’un chiot : environnement, besoins spécifiques, bases de l’éducation, socialisation et bien-être.",
  },
  {
    title: "Cours d’éducation privé",
    prix: "40€",
    description:
      "Marche en laisse, rappel, ordres personnalisés, émotions, travail binôme maître/chien.",
  },
  {
    title: "Rééducation comportementale",
    prix: "50-70€",
    description:
      "Travail des troubles : peur, agressivité, réactivité, destruction… Séances personnalisées selon profil.",
  },
  {
    title: "Balades éducatives",
    prix: "25€",
    description:
      "Renforcement des apprentissages, rappel, socialisation, marche en extérieur. Travail en situation réelle.",
  },
  {
    title: "Enrichissement / perfectionnement",
    prix: "25€",
    description:
      "Jeux, nouveaux ordres, correction de comportements ou maladresses. Travail de communication.",
  },
  {
    title: "Petsitting chien",
    prix: "15€",
    description:
      "Visite à domicile avec repas, balade, câlins et surveillance selon les besoins.",
  },
  {
    title: "Petsitting chats / NAC",
    prix: "12€",
    description:
      "Entretien (litière, cage), câlins, nourriture et vérifications à domicile.",
  },
  {
    title: "Promenades",
    prix: "15€/30min – 25€/h",
    description:
      "Promenades de 30 minutes à 1h. Présence obligatoire à domicile au départ.",
  },
  {
    title: "Initiation agility",
    prix: "30€",
    description:
      "Sauts, tunnel, slalom. Activité non compétitive, ludique et enrichissante.",
  },
  {
    title: "Initiation vélo",
    prix: "30€",
    description:
      "Découverte du cani-cross ou balade simple à vélo pour maître et chien.",
  },
];

const MotionCard = motion(Card);

export default function PricingSection() {
  return (
    <Box py="xl" bg="#FEFAE0">
      <Container size="lg">
        <Title ta="center" mb="xl" c="#283618">
          Tarifs & Prestations 🐾
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {tarifs.map((item) => (
            <MotionCard
              key={item.title}
              p="lg"
              radius="lg"
              shadow="sm"
              bg="#283618"
              style={{ color: "white" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Group justify="space-between" mb="sm">
                <Title order={4} style={{ color: "#FEFAE0" }}>
                  {item.title}
                </Title>
                <Text fw={700} style={{ color: "#DDA15E" }}>
                  {item.prix}
                </Text>
              </Group>
              <Text size="sm" c="#EDE6DA">
                {item.description}
              </Text>
            </MotionCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
