"use client";

import {
  Box,
  Card,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

const services = [
  {
    icon: "/icons/bilan.png",
    title: "Bilan Comportemental",
    desc: "Analyse des besoins du chien et de la famille pour établir un programme personnalisé.",
    price: "40€",
  },
  {
    icon: "/icons/education.png",
    title: "Éducation Chiot",
    desc: "Apprentissage de la propreté, des ordres de base et gestion des émotions.",
    price: "35€",
  },
  {
    icon: "/icons/reeducation.png",
    title: "Rééducation",
    desc: "Prise en charge des troubles du comportement : peur, agressivité, destruction...",
    price: "50–70€",
  },
  {
    icon: "/icons/balade.png",
    title: "Balade Éducative",
    desc: "Travail en extérieur sur les ordres et le comportement dans un cadre réel.",
    price: "25€",
  },
  {
    icon: "/icons/petsitting.png",
    title: "Petsitting",
    desc: "Visites à domicile avec repas, balade, câlins et suivi selon les besoins.",
    price: "12–25€",
  },
  {
    icon: "/icons/agility.png",
    title: "Initiation Agility",
    desc: "Découverte ludique des parcours agility pour renforcer la complicité.",
    price: "30€",
  },
];

export default function PricingSection() {
  return (
    <Box py="xl" bg="#FEFAE0">
      <Container size="lg">
        <Title order={2} ta="center" c="#283618" mb="xl">
          Nos Prestations & Tarifs 🐾
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {services.map((s) => (
            <Card
              key={s.title}
              shadow="md"
              radius="lg"
              p="lg"
              bg="#4E342E"
              style={{
                border: "2px solid #DDA15E",
                textAlign: "center",
                color: "#FEFAE0",
              }}
              withBorder
            >
              <Image
                src={s.icon}
                alt={s.title}
                w={60}
                h={60}
                mx="auto"
                mb="md"
              />

              <Title order={4} c="white" mb={4}>
                {s.title}
              </Title>

              <Text size="sm" c="#FEFAE0" mb="xs">
                {s.desc}
              </Text>

              <Text fw={700} c="#DDA15E">
                {s.price}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
