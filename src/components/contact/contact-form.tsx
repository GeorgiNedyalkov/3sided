"use client";

import { useState } from "react";
import { submitContactData } from "@/lib/actions";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contactData = new FormData();
      contactData.append("firstName", formData.firstName);
      contactData.append("lastName", formData.lastName);
      contactData.append("email", formData.email);
      contactData.append("message", formData.message);

      await submitContactData(contactData);
      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form data: ", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return <div>Thank you for your request. We will answer you shortly.</div>;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col gap-4 p-10">
        {/* Full Name */}
        <div className="flex flex-col gap-4 md:mb-8 md:flex-row md:gap-8">
          <div className="flex w-full flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              value={formData.firstName}
              onChange={handleFormChange}
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Georgi"
              className="border p-2"
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              value={formData.lastName}
              onChange={handleFormChange}
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Nedyalkov"
              className="border p-2"
            />
          </div>
        </div>
        <div className="mb-8 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={handleFormChange}
            id="email"
            name="email"
            type="email"
            placeholder="gnedyalkov94@gmail.com"
            className="w-72 border p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Message</label>
          <textarea
            value={formData.message}
            onChange={handleFormChange}
            id="message"
            name="message"
            placeholder="Please write us a short message about your inquiry..."
            className="w-full border p-2"
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-32 cursor-pointer border bg-slate-400 p-2 hover:bg-slate-900 hover:text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function FormUnderlined() {
  return (
    <form>
      <div className="flex flex-col gap-4 p-10">
        {/* Full Name */}
        <div className="flex flex-col gap-4 md:mb-8 md:flex-row md:gap-8">
          <div className="flex w-full flex-col">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Georgi"
              className="border-b-2 border-b-black p-2"
              required
            />
          </div>
          <div className="flex w-full flex-col">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Nedyalkov"
              className="border-b-2 border-b-black p-2"
              required
            />
          </div>
        </div>
        <div className="mb-8 flex flex-col">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="gnedyalkov94@gmail.com"
            className="w-72 border-b-2 border-b-black p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <textarea
            id="message"
            name="message"
            placeholder="Please write us a short message about your inquiry..."
            className="w-full border border-slate-950 p-2"
            required
          />
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-32 cursor-pointer border bg-slate-400 p-2 hover:bg-slate-900 hover:text-white"
        >
          Send
        </button>
      </div>
    </form>
  );
}
