"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

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

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Message from: ${validatedFields.data.firstName} ${validatedFields.data.lastName}`,
      text: `${validatedFields.data.message}`,
    });
    console.log("Email sent to your inbox");

    // Comment out automatic email while testing
    // await transporter.sendMail({
    //   from: process.env.EMAIL,
    //   to: validatedFields.data.email,
    //   subject: `Thank you for your inquiry:`,
    //   text: `Thank you very much for your message ${validatedFields.data.firstName} ${validatedFields.data.lastName}! \n You will hear from us in under one hour. We promise 💖`,
    // });
    // console.log("Automatic reply to the sender");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function subscribeToNewsletter(formData: FormData) {
  const { email } = {
    email: formData.get("email"),
  };

  // mutate date
  // revalidate cashe
  if (!email) {
    return "Error no email";
  }

  // await subscribeToNewsletter(email);
}
