import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luan Fabri — Frontend Engineer",
  description:
    "I build fast, reliable interfaces for products people depend on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950">
      <body className="bg-neutral-950 text-white antialiased">{children}</body>
    </html>
  );
}
