import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
import Header from "@/components/Header";
import PreHeader from "@/components/PreHeader"; // Import PreHeader

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
        <PreHeader /> {/* Add PreHeader here */}
        <Header />
        {children}
      </body>
    </html>
  );
}
