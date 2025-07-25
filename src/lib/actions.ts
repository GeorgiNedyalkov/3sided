"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { addSubscriber } from "@/lib/mailer-lite";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
  message: z.string(),
});

export async function submitContactData(formData: FormData): Promise<void> {
  const validatedFields = schema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    console.log({
      errors: validatedFields.error.flatten().fieldErrors,
    });

    return;
  }

  console.log("Validated form data: ", validatedFields);


  // Send contact form data to our email
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Message from: ${validatedFields.data.firstName} ${validatedFields.data.lastName}`,
      text: `${validatedFields.data.message}`,
    });
    console.log("Email sent to your inbox");
  } catch (error) {
    console.error("Error sending email:", error);
  }

  // Send automatic response email
  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: validatedFields.data.email,
      subject: `Thank you for your inquiry:`,
      text: `Thank you very much for your message ${validatedFields.data.firstName} ${validatedFields.data.lastName}! \n You will hear from us in under one hour. We promise 💖`,
    });
    console.log("Automatic reply to the sender");
  } catch (error) {
    console.error("Error sending automatic response:", error);
  }
}

// Validate and prepare the data
const EmailSchema = z.string().email({ message: "Error: Invalid email" });

// Server action subscribe to newsletter
export async function subscribeToNewsletter(formData: FormData) {
  // Extract data from form data
  const rawEmailData = {
    email: formData.get("email"),
  };

  const email = EmailSchema.parse(rawEmailData.email);

  console.log(email);

  try {
    await addSubscriber(email);

    const result = await transporter.sendMail({
      from: "gnedyalkov94@gmail.com",
      to: email,
      subject: "Welcome to 3sided family",
      text: `Thank you very much for your message`,
    })
    console.log(result);
  } catch (error) {
    console.log(error);
    throw new Error("Error: could not add subscriber to newsletter list")
  }
}


