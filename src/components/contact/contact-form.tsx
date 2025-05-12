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

  // if (isSubmitted) {
  //   return <div>Thank you for your request. We will answer you shortly.</div>;
  // }

  return (
    <form onSubmit={handleFormSubmit} className="max-w-xl">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:mb-8 md:flex-row md:gap-8">
          <div className="flex w-full flex-col">
            <label htmlFor="firstName"></label>
            <input
              value={formData.firstName}
              onChange={handleFormChange}
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              className="border-b-2 border-b-black focus:outline-none py-2"
			  required
            />
          </div>
          <div className="flex w-full flex-col">
            <label htmlFor="lastName"></label>
            <input
              value={formData.lastName}
              onChange={handleFormChange}
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="border-b-2 border-b-black focus:outline-none py-2"
			  required
            />
          </div>
        </div>
        <div className="mb-8 flex flex-col w-full">
          <label htmlFor="email"></label>
          <input
            value={formData.email}
            onChange={handleFormChange}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="border-b-2 border-b-black focus:outline-none py-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email"></label>
          <textarea
            value={formData.message}
            onChange={handleFormChange}
            id="message"
            name="message"
            placeholder="Please write us a short message about your inquiry..."
            className="border-b-2 border-b-black p-2"
			required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-primary p-3 uppercase transition-all duration-300 hover:bg-red-900 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}
