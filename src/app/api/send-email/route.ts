import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = (await req.json()) as {
            name: string;
            email: string;
            message: string;
        };

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.CONTACT_TO_EMAIL!,
            subject: `New message from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Roboto, Helvetica, Arial; background: #f6f8fa; padding: 24px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #e5e7eb;">
        
        <h2 style="margin: 0 0 16px; font-size: 20px; font-weight: 600; color: #111827;">
          New Message From Your Portfolio
        </h2>

        <div style="border-top: 1px solid #e5e7eb; padding-top: 16px;">

          <p style="margin: 0 0 10px;">
            <strong style="color: #111827;">Name:</strong> ${name}
          </p>

          <p style="margin: 16px 0 0; color: #111827;">
            <strong style="display:block; margin-bottom: 6px;">Message:</strong>
            <span style="white-space: pre-wrap; line-height: 1.6; color:#374151;">
              ${message}
            </span>
          </p>
        </div>

        <a href="mailto:${email}" 
          style="display:inline-block; margin-top: 24px; padding: 10px 18px; background: #111827; color:#ffffff; 
          text-decoration:none; border-radius:8px; font-size:14px; font-weight:600;">
          Reply to ${name}
        </a>

        <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
          This message was sent from your portfolio contact form.
        </p>

      </div>
    </div>
  `,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
    }
}
