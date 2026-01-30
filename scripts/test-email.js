/**
 * Email setup debug script
 * Run: node scripts/test-email.js
 * Or:  npm run email:debug
 *
 * Checks .env and tests Gmail SMTP (App Password).
 */

const path = require("path");
const fs = require("fs");

// Load .env from project root (same folder as package.json)
const envPath = path.join(__dirname, "..", ".env");
if (fs.existsSync(envPath)) {
	require("dotenv").config({ path: envPath });
	console.log("Loaded .env from:", envPath);
} else {
	console.error("ERROR: .env not found at", envPath);
	console.error(
		"Create .env with GMAIL_USER and GMAIL_APP_PASSWORD (see .env.example)",
	);
	process.exit(1);
}

const user = process.env.GMAIL_USER?.trim();
const rawPass = process.env.GMAIL_APP_PASSWORD || "";
const pass = rawPass.replace(/\s/g, "").trim();
const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || user;

console.log("\n--- Env check ---");
console.log("GMAIL_USER (sends from):     ", user ? user : "(missing)");
console.log(
	"GMAIL_APP_PASSWORD (length): ",
	pass ? `${pass.length} chars (spaces removed)` : "(missing)",
);
console.log(
	"CONTACT_TO_EMAIL (receive):  ",
	toEmail ? toEmail : "(uses GMAIL_USER)",
);

if (!user || !pass) {
	console.error("\nERROR: Set GMAIL_USER and GMAIL_APP_PASSWORD in .env");
	console.error(
		"Use App Password from https://myaccount.google.com/apppasswords (not your normal password)",
	);
	process.exit(1);
}

if (pass.length !== 16) {
	console.warn(
		"\nWARN: App Password is usually 16 characters. You have",
		pass.length,
	);
	console.warn(
		"If you copied with spaces, the script removes them. If login fails, create a new App Password.",
	);
}

async function test() {
	const nodemailer = require("nodemailer");
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: { user, pass },
	});

	console.log("\n--- Verifying SMTP connection ---");
	try {
		await transporter.verify();
		console.log("OK: SMTP login successful.");
	} catch (err) {
		console.error("FAIL: SMTP login failed.");
		console.error("Error:", err.message);
		if (err.code === "EAUTH") {
			console.error("\nFix:");
			console.error("1. Use an App Password, not your Gmail password.");
			console.error(
				"2. Turn on 2-Step Verification: https://myaccount.google.com/security",
			);
			console.error(
				"3. Create App Password: https://myaccount.google.com/apppasswords",
			);
			console.error(
				"4. Put the 16-character password in .env as GMAIL_APP_PASSWORD (spaces optional).",
			);
		}
		process.exit(1);
	}

	console.log("\n--- Sending test email ---");
	try {
		const info = await transporter.sendMail({
			from: `"whsofttech" <${user}>`,
			to: toEmail,
			subject: "whsofttech contact form – test",
			text: "This is a test from the email debug script. Contact form is configured correctly.",
		});
		console.log("OK: Test email sent. Message ID:", info.messageId);
		console.log("Check inbox of:", toEmail);
	} catch (err) {
		console.error("FAIL: Could not send test email.");
		console.error("Error:", err.message);
		process.exit(1);
	}

	console.log("\n--- Summary ---");
	console.log("Sends from:  ", user);
	console.log("Receives to: ", toEmail);
	console.log("Contact form will use these. All good.");
}

test();
