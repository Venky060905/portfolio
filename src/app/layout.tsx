import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Venkatesh Kothamasu | Data Analyst & Backend Developer",
  description: "Premium portfolio of Venkatesh Kothamasu - transforming raw data into actionable business insights with SQL, Python, Power BI, and Django.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
