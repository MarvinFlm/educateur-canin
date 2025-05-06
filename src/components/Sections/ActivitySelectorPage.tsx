"use client";

import { Carousel } from "@mantine/carousel";
import {
  Box,
  Card,
  Container,
  Grid,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const activities = [
  {
    id: "education",
    title: "Éducation Chiot",
    image: "/icons/education.png",
    description:
      "L’éducation du chiot est une étape cruciale : elle pose les bases d’une vie équilibrée. On y travaille la propreté, les premiers ordres (assis, viens, pas bouger), la socialisation avec d’autres chiens et humains, ainsi que la gestion des émotions. Ces séances sont ludiques, courtes et adaptées au rythme du chiot.",
    details:
      "Durée : 45 min | Lieu : À domicile ou extérieur calme | Objectif : autonomie, écoute, socialisation.",
  },
  {
    id: "reeducation",
    title: "Rééducation",
    image: "/icons/reeducation.png",
    description:
      "La rééducation comportementale vise à accompagner les chiens présentant des troubles (peur, anxiété, agressivité, destruction). Chaque séance est personnalisée, et l’objectif est de restaurer un comportement serein, par des exercices pratiques, des jeux, et un travail sur la relation maître/chien.",
    details:
      "Durée : 1h | Bilan initial obligatoire | Adapté selon le niveau de réactivité du chien.",
  },
  {
    id: "balade",
    title: "Balades éducatives",
    image: "/icons/balade.png",
    description:
      "Les balades éducatives permettent de renforcer les apprentissages dans un cadre naturel. C’est l’occasion de pratiquer les ordres en situation réelle, d’améliorer le rappel, la gestion de la laisse et la sociabilisation avec l’environnement. Ces moments sont à la fois pédagogiques et relaxants.",
    details:
      "Durée : 1h | En groupe ou individuel | Départ possible à domicile.",
  },
  {
    id: "agility",
    title: "Initiation Agility",
    image: "/icons/agility.png",
    description:
      "L’agility est une activité ludique et stimulante qui favorise la complicité entre le chien et son maître. On y découvre les sauts, tunnels, slaloms… sans pression ni compétition. Adapté à tous types de chiens, c’est aussi un excellent moyen de canaliser l’énergie et de s’amuser ensemble.",
    details:
      "Durée : 45 min | En terrain sécurisé | Pré-requis : chien sociable et motivé.",
  },
];

const MotionCard = motion(Card);
const MotionGrid = motion(Grid);

export default function ActivitySelectorPage() {
  const [selected, setSelected] = useState("education");
  const active = activities.find((a) => a.id === selected);
  const detailRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selected]);

  return (
    <Box py="xl" bg="#FEFAE0">
      <Container size="lg">
        <Title order={2} ta="center" c="#283618" mb="xl">
          Nos Activités 🐾
        </Title>

        {isMobile ? (
          <Carousel slideSize="70%" slideGap="md" align="start" withIndicators>
            {activities.map((activity) => (
              <Carousel.Slide key={activity.id}>
                <MotionCard
                  p="md"
                  radius="lg"
                  w="100%"
                  bg={selected === activity.id ? "#DDA15E" : "#FEFAE0"}
                  style={{
                    cursor: "pointer",
                    textAlign: "center",
                    border:
                      selected === activity.id
                        ? "2px solid #BC6C25"
                        : "1px solid #DDA15E",
                  }}
                  onClick={() => setSelected(activity.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    w={60}
                    h={60}
                    mx="auto"
                    mb="sm"
                  />
                  <Title order={4} c="#283618">
                    {activity.title}
                  </Title>
                </MotionCard>
              </Carousel.Slide>
            ))}
          </Carousel>
        ) : (
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" mb="xl">
            {activities.map((activity) => (
              <MotionCard
                key={activity.id}
                p="md"
                radius="lg"
                bg={selected === activity.id ? "#DDA15E" : "#FEFAE0"}
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                  border:
                    selected === activity.id
                      ? "2px solid #BC6C25"
                      : "1px solid #DDA15E",
                }}
                onClick={() => setSelected(activity.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={activity.image}
                  alt={activity.title}
                  w={60}
                  h={60}
                  mx="auto"
                  mb="sm"
                />
                <Title order={4} c="#283618">
                  {activity.title}
                </Title>
              </MotionCard>
            ))}
          </SimpleGrid>
        )}

        {active && (
          <MotionGrid
            ref={detailRef}
            align="center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image src={active.image} alt={active.title} radius="lg" />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} c="#283618" mb="sm">
                {active.title}
              </Title>
              <Text c="#606C38" size="lg" mb="sm">
                {active.description}
              </Text>
              <Text c="#283618" fw={600}>
                {active.details}
              </Text>
            </Grid.Col>
          </MotionGrid>
        )}
      </Container>
    </Box>
  );
}
