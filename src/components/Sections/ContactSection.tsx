"use client";

import { Box, Container, Text, Title } from "@mantine/core";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <Box bg="#FEFAE0" py="xl">
      <Container size="md">
        <Title order={2} c="#283618" ta="center">
          Contactez-moi 🐾
        </Title>
        <Text ta="center" c="#606C38" mb="lg">
          Une question ? Un besoin spécifique ? Je suis à votre écoute.
          Remplissez ce formulaire et je vous recontacte au plus vite.
        </Text>
        <ContactForm />
      </Container>
    </Box>
  );
}
