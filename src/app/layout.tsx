import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '@/components/navbar/Navbar'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Bazaar",
  description: "E-commerce clothing web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar />
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}
