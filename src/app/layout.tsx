import type { Metadata } from "next";
import "./globals.css";
import { cookies } from "next/headers";

import { CartProvider } from "@/components/cart/cart-context";
import { getCart } from "@/lib/shopify";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "3SIDED",
  description: "Buy charms and bracelets from 3Sided",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cartId = (await cookies()).get("cartId")?.value;
  const cart = getCart(cartId);

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/urc1gyw.css"></link>
      </head>
      <body className={`antialiased`}>
        <CartProvider cartPromise={cart}>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
