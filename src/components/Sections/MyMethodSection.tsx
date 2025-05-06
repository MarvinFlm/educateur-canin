"use client";

import { Box, Container, Grid, Text, Title } from "@mantine/core";

export default function MyMethodSection() {
  return (
    <Box py="xl">
      <Container size="lg">
        <Grid align="center">
          <Grid.Col span={12}>
            <Title order={2} c="#283618" ta="center" mb="md">
              Ma méthode d’éducation 🐾
            </Title>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 8 }} mx="auto">
            <Text c="#283618" size="md" mb="sm">
              Mon approche est fondée sur le respect, l'écoute et la
              compréhension du chien <strong>et</strong> de sa famille.
              J’utilise des méthodes{" "}
              <strong>positives et personnalisées</strong>, adaptées au
              tempérament et au vécu de chaque animal.
            </Text>

            <Text c="#283618" size="md" mb="sm">
              Je n’utilise <strong>jamais</strong> de collier étrangleur,
              électrique, ni de violence physique ou verbale. L’éducation doit
              être une expérience positive, basée sur la confiance, la
              communication et le jeu.
            </Text>

            <Text c="#283618" size="md">
              Ensemble, nous allons créer une relation équilibrée, saine et
              joyeuse entre vous et votre boule de poils.
              <br />
              Parce que chaque binôme maître/chien est unique 🐕‍🦺❤️
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
