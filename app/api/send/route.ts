import { NextRequest, NextResponse } from "next/server";
import React from "react" ;
import { Resend } from "resend";
import { ContactFormEmail } from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  let senderEmail = formData.get("senderEmail") as string;
  let message = formData.get("message") as string;

  // simple server-side validation
  if (!senderEmail || !message || senderEmail.length > 500 || message.length > 5000) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "franc.spata@gmail.com",
      subject: "Message from contact form",
      react: React.createElement(ContactFormEmail, { message, senderEmail }),
    });
    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
