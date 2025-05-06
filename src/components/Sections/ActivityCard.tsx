"use client";

import { Box, Card, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { CustomButton } from "../UI/CustomButton";

const MotionCard = motion(Card);

interface ActivityCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

export function ActivityCard({
  icon,
  title,
  description,
  link,
}: ActivityCardProps) {
  return (
    <MotionCard
      shadow="md"
      radius="lg"
      p="xl"
      bg="#FEFAE0"
      style={{ border: "2px solid #DDA15E" }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Box mb="md" style={{ fontSize: 40, color: "#BC6C25" }}>
        {icon}
      </Box>
      <Title order={3} c="#283618" mb="xs">
        {title}
      </Title>
      <Text c="#606C38" mb="md">
        {description}
      </Text>
      {link && (
        <CustomButton variantType="secondary" component="a" href={link}>
          En savoir plus
        </CustomButton>
      )}
    </MotionCard>
  );
}
