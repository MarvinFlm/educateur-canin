"use client";

import { Container, Image, Text, Title } from "@mantine/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import classes from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function EducateurPage() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const sections = useRef<(HTMLDivElement | null)[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    if (titleRef.current) {
      const split = new SplitType(titleRef.current, { types: "words,chars" });
      gsap.from(split.chars, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.03,
        ease: "power3.out",
      });
    }

    sections.current.forEach((section) => {
      if (section) {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        });
      }
    });
  }, [hasMounted]);

  if (!hasMounted) {
    return <div style={{ minHeight: "100vh" }}></div>;
  }

  return (
    <div className={classes.wrapper}>
      <Container size="md">
        <Title ref={titleRef} className={classes.mainTitle}>
          À propos de moi
        </Title>
      </Container>

      <Container size="md" className={classes.profileBlock}>
        <Image
          src="/images/profil.jpg"
          alt="Portrait de l'éducateur canin"
          className={classes.profileImage}
        />
        <Text className={classes.profileName}>Maë - Éducateur Canin</Text>
      </Container>

      <Container
        size="md"
        className={classes.section}
        ref={(el) => {
          sections.current[0] = el;
        }}
      >
        <Text className={classes.paragraph}>
          Avant de devenir une passion, je me suis formé pour eux, pour mes
          loulous 🐾. Je me suis renseigné sur les méthodes déducation
          positives, le bien-être du chien, qu&apos;il soit de famille ou de
          travail. Puis j&apos;ai élargi mes connaissances : diplôme
          d’éducateur, formations en comportementalisme et en secourisme canin.
        </Text>
      </Container>

      <Container
        size="md"
        className={classes.section}
        ref={(el) => {
          sections.current[0] = el;
        }}
      >
        <Text className={classes.paragraph}>
          Ma méthode repose sur la douceur, la compréhension et
          l&apos;adaptation. Chaque chien, chaque humain, chaque famille est
          unique. Mon approche est toujours personnalisée et respectueuse : pas
          de collier étrangleur, pas de cris, pas de violence — que du positif.
        </Text>
      </Container>

      <Container
        size="md"
        className={classes.section}
        ref={(el) => {
          sections.current[0] = el;
        }}
      >
        <Text className={classes.paragraph}>
          Aujourd’hui, j’accompagne les familles pour qu’elles construisent une
          relation saine, durable et joyeuse avec leur compagnon. Je suis
          éducateur, comportementaliste et petsitter diplômé 🎓, animé par une
          seule chose : leur bonheur à eux.
        </Text>
      </Container>
    </div>
  );
}
