"use client";

import {
  Button,
  Container,
  Group,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import { useState } from "react";
import classes from "./page.module.css";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: intégration email
    alert("Message envoyé");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className={classes.wrapper}>
      <Container size="sm">
        <Title className={classes.title}>Contactez-moi</Title>
        <Text mb="lg" size="md">
          Pour toute question, demande de rendez-vous ou information, n’hésitez
          pas à m’écrire via ce formulaire.
        </Text>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          autoComplete="off"
        >
          <TextInput
            label="Nom"
            name="name"
            autoComplete="off"
            required
            value={form.name}
            onChange={handleChange}
            data-form-type="other"
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            autoComplete="off"
            required
            value={form.email}
            onChange={handleChange}
            data-form-type="other"
          />
          <Textarea
            label="Message"
            name="message"
            autoComplete="off"
            required
            value={form.message}
            onChange={handleChange}
            minRows={4}
            data-form-type="other"
          />
          <Group justify="center" mt="md">
            <Button type="submit" color="vert.6" radius="xl">
              Envoyer
            </Button>
          </Group>
        </form>

        <Group justify="center" mt="xl" className={classes.socials}>
          <Button
            component="a"
            href="https://www.facebook.com/profile.php?id=100091938254818"
            target="_blank"
            variant="subtle"
            leftSection={<IconBrandFacebook size={18} />}
          >
            Facebook
          </Button>
          <Button
            component="a"
            href="https://www.instagram.com/mon.maitre.et.moi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            variant="subtle"
            leftSection={<IconBrandInstagram size={18} />}
          >
            Instagram
          </Button>
        </Group>
      </Container>
    </div>
  );
}
