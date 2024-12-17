import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { MenuBar } from "@/components/MenuBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Carrot Mapper",
  description: "Convenient And Reusable Rapid Omop Transformer",
  keywords: [
    "OMOP CDM",
    "Data standardization",
    "Healthcare interoperability",
    "Clinical data mapping",
    "OHDSI",
    "OMOP",
    "Common data model",
    "Medical vocabulary mapping",
    "Health data conversion",
    "Observational research",
    "ETL for OMOP",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": 160,
    },
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MenuBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}