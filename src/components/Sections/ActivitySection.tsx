"use client";

import { Box, Card, Container, SimpleGrid, Text, Title } from "@mantine/core";

export default function ActivitySection() {
  return (
    <Container size="lg" py="xl">
      <Title order={2} c="#283618" ta="center" mb="lg">
        Nos Activités 🐶
      </Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
        <Card
          p="lg"
          radius="md"
          bg="#FEFAE0"
          style={{ border: "2px solid #DDA15E" }}
        >
          <Box mb="sm">
            <Title order={3} c="#283618">
              Balades éducatives
            </Title>
            <Text c="#606C38" mt="xs">
              Des promenades pour apprendre dans le plaisir et renforcer le lien
              avec votre chien.
            </Text>
          </Box>
        </Card>

        <Card
          p="lg"
          radius="md"
          bg="#FEFAE0"
          style={{ border: "2px solid #DDA15E" }}
        >
          <Box mb="sm">
            <Title order={3} c="#283618">
              Cours d’éducation
            </Title>
            <Text c="#606C38" mt="xs">
              Des séances pour enseigner les bases de l’obéissance en douceur,
              adaptées à votre chien.
            </Text>
          </Box>
        </Card>

        <Card
          p="lg"
          radius="md"
          bg="#FEFAE0"
          style={{ border: "2px solid #DDA15E" }}
        >
          <Box mb="sm">
            <Title order={3} c="#283618">
              Rééducation comportementale
            </Title>
            <Text c="#606C38" mt="xs">
              Travail sur les comportements problématiques pour un quotidien
              plus serein.
            </Text>
          </Box>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
