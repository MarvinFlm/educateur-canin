// app/layout.tsx
import { Navbar } from "@/components/Navbar";
import { theme } from "@/theme";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon site éducateur canin",
  description: "Site éducateur canin moderne et esthétique",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={theme}
          defaultColorScheme="light"
          forceColorScheme="light"
        >
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
