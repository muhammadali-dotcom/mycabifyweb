import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
}

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  currentSystem: "Current system",
  fleetSize: "Fleet size",
  message: "Message",
};

export async function sendFormEmail({
  subject,
  fields,
}: {
  subject: string;
  fields: Record<string, string>;
}) {
  const rows = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => ({ label: FIELD_LABELS[key] ?? key, value }));

  const text = rows.map(({ label, value }) => `${label}: ${value}`).join("\n");
  const html = `<table>${rows
    .map(
      ({ label, value }) =>
        `<tr><td><strong>${label}</strong></td><td>${value}</td></tr>`
    )
    .join("")}</table>`;

  await getTransporter().sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: fields.email || undefined,
    subject,
    text,
    html,
  });
}
