"use client";

import {
  faDog,
  faGamepad,
  faPaw,
  faStethoscope,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Text, Title } from "@mantine/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import classes from "./MethodCarousel3D.module.css";

gsap.registerPlugin(ScrollTrigger);

const methods = [
  {
    title: "Méthode Positive",
    description: "Sans violence, basée sur la récompense.",
    icon: faPaw,
  },
  {
    title: "Approche personnalisée",
    description: "On adapte chaque séance à vous et votre chien.",
    icon: faUserCheck,
  },
  {
    title: "Cours chiots & adultes",
    description: "Pour bien démarrer ou rééduquer.",
    icon: faDog,
  },
  {
    title: "Entraînement médical",
    description: "Préparation aux manipulations vétérinaires.",
    icon: faStethoscope,
  },
  {
    title: "Activités ludiques",
    description: "Agility, vélo, jeux, etc.",
    icon: faGamepad,
  },
];

export function MethodCarousel3D() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className={classes.section} ref={containerRef}>
      <Title order={2} className={classes.title}>
        Nos méthodes & pratiques
      </Title>
      <div className={classes.carousel}>
        {methods.map((method, index) => {
          const isHovered = hoveredIndex === index;
          const isOther = hoveredIndex !== null && hoveredIndex !== index;

          return (
            <Card
              key={index}
              className={`${classes.card} ${isHovered ? classes.active : ""} ${
                isOther ? classes.shrink : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              shadow="xl"
              radius="lg"
              padding="lg"
            >
              <FontAwesomeIcon icon={method.icon} className={classes.icon} />
              <Title order={4}>{method.title}</Title>
              <Text mt="sm">{method.description}</Text>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
