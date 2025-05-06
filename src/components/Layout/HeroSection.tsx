"use client";

import { Box, Container, Group, Image, Text, Title } from "@mantine/core";
import { CustomButton } from "../UI/CustomButton";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt?: string;
  };
  buttons?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary" | "danger" | "success";
  }[];
}

export default function HeroSection({
  title,
  subtitle,
  image,
  buttons = [],
}: HeroSectionProps) {
  return (
    <Box py={100} bg="#FEFAE0">
      <Container size="lg">
        <Group justify="space-between" align="center" wrap="wrap">
          <Box style={{ maxWidth: 500 }}>
            <Title order={1} c="#283618" size="2.5rem" mb="md">
              {title}
            </Title>

            <Text c="#606C38" size="lg" mb="xl">
              {subtitle}
            </Text>

            <Group>
              {buttons.map((btn, i) => (
                <CustomButton
                  key={i}
                  variantType={btn.variant ?? "primary"}
                  component="a"
                  href={btn.href}
                >
                  {btn.label}
                </CustomButton>
              ))}
            </Group>
          </Box>

          <Box style={{ maxWidth: 400 }}>
            <Image
              radius="xl"
              src={image.src}
              alt={image.alt || ""}
              fit="contain"
            />
          </Box>
        </Group>
      </Container>
    </Box>
  );
}
