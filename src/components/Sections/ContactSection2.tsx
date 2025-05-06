"use client";

import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconMail, IconPhone, IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Prénom requis" : null),
      email: (value) => (/\S+@\S+\.\S+/.test(value) ? null : "Email invalide"),
      message: (value) => (value.length < 10 ? "Message trop court" : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box py="xl" bg="#FEFAE0">
      <Container size="xs" px={{ base: "md", sm: 0 }}>
        <Title order={2} ta="center" c="#283618" mb="xl">
          Contactez-moi 🐾
        </Title>

        {sent ? (
          <Title order={4} c="#283618" ta="center">
            Merci pour votre message, je vous répondrai rapidement !
          </Title>
        ) : (
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack spacing="md">
              <TextInput
                label="Nom"
                placeholder="Votre prénom"
                icon={<IconUser size={18} />}
                withAsterisk
                {...form.getInputProps("name")}
              />

              <TextInput
                label="Email"
                placeholder="exemple@mail.com"
                icon={<IconMail size={18} />}
                withAsterisk
                {...form.getInputProps("email")}
              />

              <TextInput
                label="Téléphone (optionnel)"
                placeholder="06 00 00 00 00"
                icon={<IconPhone size={18} />}
                {...form.getInputProps("phone")}
              />

              <Textarea
                label="Message"
                placeholder="Expliquez-moi votre besoin..."
                minRows={4}
                autosize
                withAsterisk
                {...form.getInputProps("message")}
              />

              <Group justify="center" mt="md">
                <Button
                  type="submit"
                  loading={loading}
                  color="orange"
                  radius="lg"
                  fullWidth
                >
                  Envoyer
                </Button>
              </Group>
            </Stack>
          </form>
        )}
      </Container>
    </Box>
  );
}
