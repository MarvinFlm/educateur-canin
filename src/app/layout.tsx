import Navbar from "@/components/Layout/Navbar";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";

export const metadata = {
  title: "Mon Maître et Moi",
  description: "Site professionnel pour éducateur canin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <ColorSchemeScript />
      </head>
      <body style={{ backgroundColor: "#FEFAE0" }}>
        <MantineProvider
          theme={{
            primaryColor: "green",
            fontFamily: "sans-serif",
          }}
          defaultColorScheme="light"
        >
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
