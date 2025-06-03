import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "CosmicVision | Branding & Creative Agency",
  description:
    "Transform your brand with CosmicVision, a premier branding and creative agency specializing in branding, UI/UX design, web development, and more.",
  keywords:
    "branding agency, creative agency, web design, UI/UX design, logo design, web development, packaging design, branding strategy",
  authors: [{ name: "CosmicVision Team" }],
  creator: "CosmicVision",
  publisher: "CosmicVision",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
