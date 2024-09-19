import { mailOptions, transporter } from "@/app/Mail/nodemailer";
import { EmailTemplate } from "@/components/EmailTemplete";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  console.log("Payload received:", payload);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: payload.subject,
      text: `Hello,\n\nYou have received a new message:\n\nName: ${payload.name}\nEmail: ${payload.email}\nMessage: ${payload.message}\n\nThank you!`,
      html: EmailTemplate({ 
        name: payload.name, 
        email: payload.email, 
        message: payload.message 
      }),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
