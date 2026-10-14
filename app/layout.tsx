import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ángel Farías | Tecnología, Datos y Automatización",
  description: "Portafolio profesional de Ángel Farías: monitorización tecnológica, análisis de datos, automatización y desarrollo de soluciones digitales.",
  openGraph: {
    title: "Ángel Farías | Portafolio profesional",
    description: "Tecnología, análisis de datos, automatización y soluciones digitales.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
