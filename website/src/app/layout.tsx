import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Carrot Mapper | Streamlined Data Mapping to OMOP",
  description: "Streamlined Data Mapping to OMOP",
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
      <body className="bg-white dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="container">{children}</section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
