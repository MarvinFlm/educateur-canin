"use client";

import { Box, Container, Group, Text, Title } from "@mantine/core";

interface HeroSecondaryProps {
  title?: string;
  subtitle?: string;
}

export default function HeroSecondary({
  title = "À propos de Maë",
  subtitle = "Un éducateur passionné pour une relation harmonieuse",
}: HeroSecondaryProps) {
  return (
    <Box py={80} bg="#FEFAE0">
      <Container size="lg">
        <Group justify="center" align="center" style={{ textAlign: "center" }}>
          <Box>
            <Title order={2} c="#283618" mb="sm" fw={700}>
              {title}
            </Title>
            <Text size="lg" c="#606C38">
              {subtitle}
            </Text>
          </Box>
        </Group>
      </Container>
    </Box>
  );
}
