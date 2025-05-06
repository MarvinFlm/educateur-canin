"use client";

import { Box, Button, Group, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Envoyer les données via API ou service mail
    setTimeout(() => {
      setLoading(false);
      alert("Message envoyé !");
    }, 1000);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} maw={500} mx="auto">
      <TextInput label="Nom" placeholder="Votre nom complet" required mb="md" />
      <TextInput
        label="Email"
        placeholder="Votre adresse email"
        required
        type="email"
        mb="md"
      />
      <Textarea
        label="Message"
        placeholder="Votre message"
        minRows={4}
        required
        mb="md"
      />
      <Group justify="flex-end">
        <Button type="submit" loading={loading} color="dark">
          Envoyer
        </Button>
      </Group>
    </Box>
  );
}
