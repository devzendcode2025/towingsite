import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "BYD Towing",
  description: "Towing services in your area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
