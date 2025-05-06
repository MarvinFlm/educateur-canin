"use client";

import { Box, Button, Container, Group, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function PresentationCTA() {
  return (
    <Box py="xl">
      <Container size="lg">
        <Title order={2} ta="center" c="#283618" mb="sm">
          Prêt à améliorer votre relation avec votre chien ?
        </Title>

        <Text ta="center" c="#283618" mb="lg" size="lg">
          Ensemble, construisons une vie harmonieuse, pleine de complicité et de
          confiance 🐾
        </Text>

        <Group justify="center">
          <Button
            component={Link}
            href="/contact"
            size="md"
            radius="xl"
            color="#283618"
            styles={{
              root: {
                backgroundColor: "#283618",
                color: "#FEFAE0",
                paddingInline: 24,
                transition: "all 0.2s ease",
              },
              rootHover: {
                backgroundColor: "#606C38",
              },
            }}
          >
            Me contacter
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
