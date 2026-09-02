import { NextResponse } from "next/server";
import { sendFormEmail } from "@/app/_lib/mailer";

const REQUIRED_FIELDS = ["name", "company", "email", "phone"] as const;

export async function POST(request: Request) {
  const body = await request.json();
  const { formType, name, company, email, phone, currentSystem, fleetSize, message } = body ?? {};

  for (const field of REQUIRED_FIELDS) {
    if (!body?.[field] || typeof body[field] !== "string" || !body[field].trim()) {
      return NextResponse.json(
        { ok: false, error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  const subjectPrefix = formType === "demo" ? "New demo request" : "New enquiry";

  try {
    await sendFormEmail({
      subject: `${subjectPrefix} from ${name} (${company})`,
      fields: { name, company, email, phone, currentSystem, fleetSize, message },
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send form email:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
