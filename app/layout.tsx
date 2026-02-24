import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/store/ReduxProvider";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html >
  );
}
