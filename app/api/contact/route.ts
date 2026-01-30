import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getContactEmailHtml } from "./email-template";

// Gmail SMTP transporter using App Password (recommended for company Gmail)
function getTransporter() {
	const user = process.env.GMAIL_USER?.trim();
	// App Password must have no spaces (Google shows it as "xxxx xxxx xxxx xxxx")
	const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "").trim();
	if (!user || !pass) {
		throw new Error("GMAIL_USER and GMAIL_APP_PASSWORD must be set in .env");
	}
	return nodemailer.createTransport({
		service: "gmail",
		auth: { user, pass },
	});
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, company, message, service } = body;

		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 },
			);
		}

		const transporter = getTransporter();
		const toEmail =
			process.env.CONTACT_TO_EMAIL ||
			process.env.GMAIL_USER ||
			"whssfottech2026@gmail.com";

		const html = getContactEmailHtml({
			name,
			email,
			company: company || undefined,
			message,
			service: service || "general",
		});

		await transporter.sendMail({
			from: `"whsofttech" <${process.env.GMAIL_USER}>`,
			to: toEmail,
			replyTo: email,
			subject: `New Contact – ${service || "General Inquiry"} | whsofttech`,
			html,
		});

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Contact form error:", error);
		return NextResponse.json(
			{
				error: error instanceof Error ? error.message : "Failed to send email",
			},
			{ status: 500 },
		);
	}
}
