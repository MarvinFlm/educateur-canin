"use client";

import { useSound } from "@/hooks/useSound";
import { Box, Burger, Container, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomButton } from "../UI/CustomButton";

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const playClick = useSound("/sounds/button-click.mp3");
  const pathname = usePathname();

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Présentation", href: "/presentation" },
    { label: "Activités", href: "/activites" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <Box
        component="nav"
        px="md"
        py="sm"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backgroundColor: "#FEFAE0",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container size="lg">
          <Group justify="space-between" align="center">
            <Link
              href="/"
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#283618",
                textDecoration: "none",
              }}
            >
              Mon Maître & Moi 🐾
            </Link>

            {/* Desktop Navigation */}
            <Group
              visibleFrom="sm"
              justify="center"
              gap="md"
              style={{ flex: 1 }}
            >
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Box
                    key={link.href}
                    component={Link}
                    href={link.href}
                    style={{
                      position: "relative",
                      color: isActive ? "#283618" : "#606C38",
                      fontWeight: isActive ? 700 : 500,
                      textDecoration: "none",
                      paddingBottom: 4,
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const underline = e.currentTarget.querySelector(
                        ".underline"
                      ) as HTMLElement;
                      if (underline) underline.style.width = "100%";
                    }}
                    onMouseLeave={(e) => {
                      const underline = e.currentTarget.querySelector(
                        ".underline"
                      ) as HTMLElement;
                      if (underline && !isActive) underline.style.width = "0%";
                    }}
                  >
                    {link.label}
                    <span
                      className="underline"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: 2,
                        width: isActive ? "100%" : "0%",
                        backgroundColor: "#BC6C25",
                        transition: "width 0.3s ease",
                      }}
                    />
                  </Box>
                );
              })}
            </Group>

            <Box visibleFrom="sm">
              <CustomButton
                variantType="secondary"
                component={Link}
                href="/contact"
                onClick={playClick}
              >
                Me contacter
              </CustomButton>
            </Box>

            {/* Burger Mobile */}
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
          </Group>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        padding="md"
        size="xs"
        title="Menu"
        hiddenFrom="sm"
      >
        <Stack>
          {links.map((link) => (
            <Box
              key={link.href}
              component={Link}
              href={link.href}
              onClick={close}
              style={{
                color: pathname === link.href ? "#283618" : "#606C38",
                fontWeight: pathname === link.href ? 700 : 500,
                textDecoration: "none",
              }}
            >
              {link.label}
            </Box>
          ))}

          <CustomButton
            variantType="secondary"
            component={Link}
            href="/contact"
            onClick={() => {
              playClick();
              close();
            }}
          >
            Me contacter
          </CustomButton>
        </Stack>
      </Drawer>
    </>
  );
}
