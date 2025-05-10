"use client"

import { useState } from "react"
import { subscribeToNewsletter } from "@/lib/actions";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("")

  return (
    <div className="flex flex-col bg-stone-500 px-4 py-6 h-64 md:flex-row md:items-center md:justify-center lg:gap-52 lg:h-80">
      <div className="flex mb-8">
        <div>
          <h2 className="mb-2 text-2xl lg:text-4xl lg:mb-6 font-bold">Subscribe to our Newsletter</h2>
          <p className="w-80">
            Get the latest news, new hot offers and be part of our community of girlies.
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
          className="w-full p-2"
          placeholder="devi@gmail.com"
        />
        <button type="submit" className="w-32 rounded-r-md p-2 bg-red-950 text-white hover:bg-red-500">
          Subscribe
        </button>
      </form>
    </div>
  );
}
