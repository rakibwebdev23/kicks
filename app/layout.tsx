import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KICKS - Do It Right | Premium Sneaker Store",
  description:
    "Discover the latest sneakers and exclusive drops at KICKS. Shop Nike, Adidas, and more premium brands. Free shipping on orders over $100.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Rubik for the brand typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
