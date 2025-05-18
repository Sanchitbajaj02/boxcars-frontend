import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import RootLayoutProvider from "@/layouts/root-layout-provider";

const font = DM_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Boxcars | Find Your Perfect Car",
  description: "Boxcars | Find Your Perfect Car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased dark`}>
        <RootLayoutProvider>{children}</RootLayoutProvider>
      </body>
    </html>
  );
}
