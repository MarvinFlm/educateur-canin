"use client";

import { useSound } from "@/hooks/useSound";
import { Box, Container, Grid, Image, Text, Title } from "@mantine/core";
import { useEffect } from "react";

export default function WhoAmISection() {
  const playWoof = useSound("/sounds/woof.mp3");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) playWoof();
      },
      { threshold: 0.4 }
    );

    const section = document.getElementById("whoami");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [playWoof]);

  return (
    <Box py="xl" bg="#DDA15E">
      <Container size="lg">
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="/images/mae-presentation.jpg" // 💡 remplace par ta vraie image
              alt="Maë, éducateur canin"
              radius="lg"
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} c="#283618" mb="md">
              Qui suis-je ?
            </Title>

            <Text size="md" c="#283618" mb="sm">
              Je m’appelle <strong>Maë</strong> et j’ai grandi entouré de chiens
              depuis mon plus jeune âge. Leur présence m’a toujours accompagné,
              inspiré, et donné envie de mieux les comprendre.
            </Text>

            <Text size="md" c="#283618" mb="sm">
              De cette passion est née une vocation. J’ai suivi une formation
              sérieuse auprès de <strong>Esprit Dog</strong>, et je me suis
              formé en éducation, comportementalisme et secourisme canin.
            </Text>

            <Text size="md" c="#283618">
              Aujourd’hui, je suis{" "}
              <strong>
                éducateur, comportementaliste et petsitter diplômé
              </strong>
              , avec une mission : vous aider à créer une relation complice et
              équilibrée avec votre compagnon à quatre pattes 🐾
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
