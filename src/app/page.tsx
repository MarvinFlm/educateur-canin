"use client";

import { MethodCarousel3D } from "@/components/MethodCarousel3D";
import { Button, Container, Image, Text, Title } from "@mantine/core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
import classes from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const introTitle = useRef<HTMLHeadingElement | null>(null);
  const sectionTitles = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    if (introTitle.current) {
      const splitIntro = new SplitType(introTitle.current, {
        types: "words,chars",
      });

      gsap.from(splitIntro.chars, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.03,
        ease: "power3.out",
      });
    }

    sectionTitles.current.forEach((title) => {
      if (title) {
        const splitTitle = new SplitType(title, { types: "words,chars" });

        gsap.from(splitTitle.chars, {
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.03,
          ease: "power3.out",
        });
      }
    });
  }, []);

  return (
    <div className={classes.wrapper}>
      <Container size="lg" className={classes.intro}>
        <Title ref={introTitle} className={classes.title}>
          Éduquez votre chien avec douceur et efficacité
        </Title>
        <Text size="lg" className={classes.subtitle}>
          Découvrez une méthode douce et respectueuse pour éduquer votre
          compagnon à quatre pattes.
        </Text>
        <Button
          component={Link}
          href="/educateur"
          color="vert.6"
          size="md"
          radius="xl"
          mt="lg"
        >
          Découvrir la méthode
        </Button>
      </Container>

      <section className={`${classes.section} section`}>
        <Container size="lg" className={classes.sectionContent}>
          <div className={classes.imageContainer}>
            <Image
              radius="md"
              src="/images/chien1.png"
              alt="Éducation canine"
            />
          </div>
          <div className={classes.textContainer}>
            <Title
              ref={(el) => {
                sectionTitles.current[0] = el;
              }}
            >
              Une méthode adaptée à chaque chien
            </Title>
            <Text mt="md">
              Chaque chien est unique. Apprenez à communiquer avec votre chien
              de manière claire et harmonieuse.
            </Text>
          </div>
        </Container>
      </section>

      <MethodCarousel3D />

      <section className={`${classes.sectionAlt} section`}>
        <Container size="lg" className={classes.sectionContentAlt}>
          <div className={classes.textContainer}>
            <Title
              ref={(el) => {
                sectionTitles.current[1] = el;
              }}
            >
              Activités variées pour votre compagnon
            </Title>
            <Text mt="md">
              Cours collectifs, séances individuelles, ateliers pratiques :
              trouvez ce qui convient le mieux à votre chien.
            </Text>
          </div>
          <div className={classes.imageContainer}>
            <Image
              radius="md"
              src="/images/chien2.png"
              alt="Activités canines"
            />
          </div>
        </Container>
      </section>

      <section className={`${classes.section} section`}>
        <Container size="lg" className={classes.callToAction}>
          <Title
            ref={(el) => {
              sectionTitles.current[2] = el;
            }}
          >
            Prêt à commencer ?
          </Title>
          <Text mt="md">
            Contactez-moi dès aujourd&apos;hui pour une première consultation
            gratuite !
          </Text>
          <Button
            color="vert.6"
            size="lg"
            radius="xl"
            mt="lg"
            component="a"
            href="/contact"
          >
            Prendre contact
          </Button>
        </Container>
      </section>
    </div>
  );
}
