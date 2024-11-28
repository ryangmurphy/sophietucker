// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const zohoUser = process.env.ZOHO_USER!;
  const zohoPass = process.env.ZOHO_PASSWORD!;
  const body = await req.json();

  const { name, email, subject, message } = body;

  // Configure Nodemailer to send email
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465, // For SSL
    secure: true, // Use SSL
    auth: {
      user: zohoUser,
      pass: zohoPass,
    },
  });

  // Email content
  const mailOptions = {
    from: zohoUser, // Your Zoho email address
    to: zohoUser, // Your Zoho email address to receive the form submissions
    subject: `Message from ${name}`,
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Subject ${subject}</p>
      <p>Message: ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      message: "Form submitted successfully! We will reach out to you soon!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error submitting form. Please Email us" },
      { status: 500 }
    );
  }
}
