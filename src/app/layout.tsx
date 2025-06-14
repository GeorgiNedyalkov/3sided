import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/cart/cart-context";
import { getCart } from "@/lib/shopify";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";

import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "3SIDED",
  description: "Buy charms and bracelets from 3Sided",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // NOTE: get the cart Id when we enter the website from the cookies.
  // we get the cart with the cart id
  const cartId = (await cookies()).get("cartId")?.value;

  // NOTE: await the promise first
  // later pass the promise to the cart
  const cart = await getCart(cartId);

  // console.log({ cartId, cart });

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/urc1gyw.css"></link>
      </head>
      <body className={`antialiased`}>
        {/* <CartProvider cartPromise={cart}> */}
        <CartProvider cartFromCookies={cart}>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
