import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Tutorial",
  description: "Build awesome stuffs with Next.jks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-6xl px-8 py-20">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
