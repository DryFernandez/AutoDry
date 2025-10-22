import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AutoDry - Automatización de Negocios con n8n",
  description: "Transformamos procesos manuales en flujos automatizados que ahorran tiempo, reducen errores y aumentan tu productividad hasta en un 80%. Soluciones profesionales con n8n.",
  keywords: ["automatización", "n8n", "workflow", "automatización de procesos", "integración", "automation"],
  authors: [{ name: "AutoDry" }],
  openGraph: {
    title: "AutoDry - Automatización de Negocios con n8n",
    description: "Automatiza tu negocio con soluciones inteligentes basadas en n8n",
    type: "website",
  },
  icons: {
    icon: '/AutoDry.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased bg-black text-white`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
