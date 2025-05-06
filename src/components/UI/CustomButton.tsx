"use client";

import { Button, ButtonProps, Group } from "@mantine/core";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  variantType?: "primary" | "secondary" | "danger" | "success";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const MotionButton = motion.create(Button);

export function CustomButton({
  variantType = "primary",
  leftIcon,
  rightIcon,
  disabled,
  children,
  ...props
}: CustomButtonProps) {
  const common = {
    radius: "md",
    size: "md",
    fw: 600,
    component: props.component || "button",
    transition: "all 0.2s ease",
    disabled,
  };

  // 🎨 Palette de couleurs personnalisée
  const variants = {
    primary: {
      background: "#283618",
      hover: "#606C38",
      color: "white",
      border: "#283618",
      shadow: "rgba(40,54,24,0.2)",
    },
    secondary: {
      background: "transparent",
      hover: "#BC6C25",
      color: "#BC6C25",
      border: "#BC6C25",
      shadow: "rgba(188,108,37,0.4)",
    },
    danger: {
      background: "#D62828",
      hover: "#B22222",
      color: "white",
      border: "#D62828",
      shadow: "rgba(214,40,40,0.4)",
    },
    success: {
      background: "#2F9E44",
      hover: "#228B22",
      color: "white",
      border: "#2F9E44",
      shadow: "rgba(47,158,68,0.4)",
    },
  };

  const style = variants[variantType];

  return (
    <MotionButton
      {...common}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      variant={variantType === "secondary" ? "outline" : "filled"}
      leftSection={leftIcon}
      rightSection={rightIcon}
      styles={{
        root: {
          backgroundColor: disabled ? "#ccc" : style.background,
          color: disabled ? "#888" : style.color,
          border: `2px solid ${style.border}`,
          boxShadow: disabled ? "none" : `0 2px 5px ${style.shadow}`,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: disabled ? "#ccc" : style.hover,
            color: disabled ? "#888" : style.color,
            boxShadow: disabled ? "none" : `0 4px 10px ${style.shadow}`,
          },
        },
      }}
      {...props}
    >
      <Group gap={6} align="center">
        {children}
      </Group>
    </MotionButton>
  );
}
