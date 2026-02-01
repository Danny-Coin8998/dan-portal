import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAN Portal",
  description: "Portal for all DAN web links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
