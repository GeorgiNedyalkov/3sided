"use client"

import { useState } from "react"
import { subscribeToNewsletter } from "@/lib/actions";
import { useTranslations } from "next-intl";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const t = useTranslations("Newsletter");

  return (
    <div className="flex flex-col border border-t-primary border-t-4 px-4 py-6 h-64 md:flex-row md:items-center md:justify-center lg:gap-52 lg:h-80">
      <div className="flex mb-8">
        <div>
          <h2 className="mb-2 text-primary text-2xl lg:text-4xl lg:mb-6 font-bold">
            {t("headline")}
          </h2>
          <p className="w-80 text-primary">
            {t("paragraph")}
          </p>
        </div>
      </div>
      <form
        action={subscribeToNewsletter}
        className="flex w-full lg:w-96 h-12">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          type="email"
          className="w-full p-2 border border-primary"
          placeholder="devi@gmail.com"
        />
        <button type="submit" className="w-64 uppercase rounded-r-md p-2 bg-red-950 text-white hover:bg-red-500">
          {t("signUpButton")}
        </button>
      </form>
    </div>
  );
}
