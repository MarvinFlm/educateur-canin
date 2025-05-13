"use client";

import { Card, Container, Tabs, Text, Title } from "@mantine/core";
import { useState } from "react";
import classes from "./page.module.css";

const activites = {
  education: [
    {
      title: "Bilan comportemental",
      price: "40€",
      description:
        "1er rendez-vous, découverte du chien et de ses maîtres, évaluation des besoins et mise en place des séances.",
    },
    {
      title: "Cours chiot",
      price: "35€",
      description:
        "Apprentissage de la propreté, des ordres de base et gestion des émotions. Travail laisse et marche au pied.",
    },
    {
      title: "Accueil d'un chiot / adoption à venir",
      price: "40€",
      description:
        "Préparation de l’environnement, socialisation, lecture du chien, prévention des angoisses.",
    },
    {
      title: "Cours d'éducation privé",
      price: "40€",
      description:
        "Sur mesure : marche, ordres, émotions, travail maître/chien.",
    },
    {
      title: "Cours de rééducation",
      price: "50–70€",
      description: "Peurs, agressivité, destruction : programme personnalisé.",
    },
    {
      title: "Balades éducatives",
      price: "25€",
      description:
        "Apprentissage en extérieur, ordres, corrections, stimulation mentale et physique.",
    },
    {
      title: "Séances d’enrichissement / perfectionnement",
      price: "25€",
      description:
        "Nouveaux ordres, jeux, lecture du chien, communication, motivation.",
    },
  ],
  petsitting: [
    {
      title: "Visites à domicile chien",
      price: "15€",
      description:
        "Visite + balade + repas selon besoins pendant votre absence.",
    },
    {
      title: "Visites domicile chats / NAC",
      price: "12€",
      description: "Entretien, câlins, repas, vérifications selon besoins.",
    },
    {
      title: "Promenades",
      price: "15€ / 30min — 25€ / heure",
      description: "Promenades à domicile, durée adaptée à vos besoins.",
    },
  ],
  initiations: [
    {
      title: "Initiation agility",
      price: "30€",
      description:
        "Découverte de l’agility (non compétitif) avec sauts, tunnel, slalom.",
    },
    {
      title: "Initiation vélo",
      price: "30€",
      description: "Balade à vélo ou initiation canicross avec votre chien.",
    },
  ],
};

export default function ActivitesTabbedPage() {
  const [activeTab, setActiveTab] = useState<string | null>("education");

  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Nos prestations</Title>
        <Tabs
          value={activeTab}
          onChange={(value) => setActiveTab(value)}
          mt="lg"
        >
          <Tabs.List>
            <Tabs.Tab value="education">Éducation & comportement</Tabs.Tab>
            <Tabs.Tab value="petsitting">Petsitting</Tabs.Tab>
            <Tabs.Tab value="initiations">Initiations</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="education" pt="md">
            {activites.education.map((item, index) => (
              <Card
                key={index}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                mb="md"
              >
                <Title order={4}>
                  {item.title} — <span>{item.price}</span>
                </Title>
                <Text mt="sm">{item.description}</Text>
              </Card>
            ))}
          </Tabs.Panel>

          <Tabs.Panel value="petsitting" pt="md">
            {activites.petsitting.map((item, index) => (
              <Card
                key={index}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                mb="md"
              >
                <Title order={4}>
                  {item.title} — <span>{item.price}</span>
                </Title>
                <Text mt="sm">{item.description}</Text>
              </Card>
            ))}
          </Tabs.Panel>

          <Tabs.Panel value="initiations" pt="md">
            {activites.initiations.map((item, index) => (
              <Card
                key={index}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                mb="md"
              >
                <Title order={4}>
                  {item.title} — <span>{item.price}</span>
                </Title>
                <Text mt="sm">{item.description}</Text>
              </Card>
            ))}
          </Tabs.Panel>
        </Tabs>
      </Container>
    </div>
  );
}
