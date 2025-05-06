"use client";

import { Card, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import { CustomButton } from "../UI/CustomButton";

const MotionCard = motion.create(Card);

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  link?: string;
}

export function PricingCard({
  title,
  price,
  description,
  link,
}: PricingCardProps) {
  return (
    <MotionCard
      shadow="md"
      radius="lg"
      p="xl"
      bg="#FEFAE0"
      style={{ border: "2px solid #606C38", textAlign: "center" }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <Title order={3} c="#283618" mb="xs">
        {title}
      </Title>
      <Text fz="xl" fw={700} c="#BC6C25" mb="xs">
        {price}
      </Text>
      <Text c="#606C38" mb="md">
        {description}
      </Text>

      {link && (
        <CustomButton variantType="primary" component="a" href={link}>
          Réserver
        </CustomButton>
      )}
    </MotionCard>
  );
}
