import type { Metadata } from "next";
import "./globals.css";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import { getCart } from "@/lib/shopify";
import { CartProvider } from "@/components/cart/cart-context";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer";

import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "3SIDED",
  description: "Buy charms and bracelets from 3Sided",
};

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const cartId = (await cookies()).get("cartId")?.value;

  const cart = await getCart(cartId);

  if (!cart) {
    console.log("Error: there is no cart");
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/urc1gyw.css"></link>
      </head>
      <body className={`antialiased`}>
        <CartProvider cartFromCookies={cart}>
          <NextIntlClientProvider>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </CartProvider>
      </body>
    </html>
  );
}
