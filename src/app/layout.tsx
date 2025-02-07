import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  title: {
    template: `%s - Tubeclone`,
    default: "Tubeclone",
  },
  description: "Video sharing platform",
  applicationName: "Tubeclone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
