import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // If email credentials are configured, send email
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const toEmail = process.env.CONTACT_EMAIL || 'hello@whssofttech.com';

    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: emailUser, pass: emailPass },
      });

      await transporter.sendMail({
        from: `"WHS SoftTech Contact" <${emailUser}>`,
        to: toEmail,
        subject: `New Lead: ${name} — ${service || 'General Inquiry'}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8B5CF6; border-bottom: 2px solid #8B5CF6; padding-bottom: 12px;">New Lead from WHS SoftTech Website</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; color: #666; width: 140px;"><strong>Name:</strong></td><td style="padding: 8px;">${name}</td></tr>
              <tr style="background: #f9f9f9;"><td style="padding: 8px; color: #666;"><strong>Company:</strong></td><td style="padding: 8px;">${company || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; color: #666;"><strong>Email:</strong></td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr style="background: #f9f9f9;"><td style="padding: 8px; color: #666;"><strong>Phone:</strong></td><td style="padding: 8px;">${phone || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; color: #666;"><strong>Service:</strong></td><td style="padding: 8px; color: #8B5CF6; font-weight: bold;">${service || 'Not specified'}</td></tr>
              <tr style="background: #f9f9f9;"><td style="padding: 8px; color: #666; vertical-align: top;"><strong>Message:</strong></td><td style="padding: 8px;">${message}</td></tr>
            </table>
            <p style="margin-top: 24px; padding: 12px; background: #f0f0ff; border-radius: 8px; color: #6366F1;">
              📞 Reply to this lead within 2 hours for best conversion.
            </p>
          </div>
        `,
      });
    }

    // Always log the lead (useful when email not configured)
    console.log('New lead received:', { name, company, email, phone, service, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
