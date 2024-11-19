import type { Metadata } from "next";
import localFont from "next/font/local";
// import Navbar from "@/components/layout/navbar/navbar";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-context";
import { cookies } from "next/headers";
import { getCart } from "@/lib";
// import { CartContext } from "@/context/cart-context";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider cartPromise={cart}>
          {/* <Navbar /> */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
