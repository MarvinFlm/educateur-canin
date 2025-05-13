"use client";

import { Burger, Container, Drawer, Group, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import classes from "./Navbar.module.css";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Présentation", href: "/educateur" },
  { label: "Activités", href: "/activites" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      href={link.href}
      key={link.label}
      className={classes.link}
      onClick={close}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Text fw={700} size="xl" c="vert.6">
          Éducateur Canin
        </Text>
        <Group gap={5} visibleFrom="sm">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Container>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        padding="md"
        hiddenFrom="sm"
      >
        <Stack>{items}</Stack>
      </Drawer>
    </header>
  );
}
