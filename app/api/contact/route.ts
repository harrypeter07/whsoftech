import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, service } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'whsofttech Contact <onboarding@resend.dev>', // Update with your verified domain
      to: ['whssfottech2026@gmail.com'],
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0a0a; color: #ffffff; border-radius: 8px;">
          <h2 style="color: #8b5cf6; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 15px;">
            <p><strong style="color: #a78bfa;">Name:</strong> ${name}</p>
            <p><strong style="color: #a78bfa;">Email:</strong> ${email}</p>
            ${company ? `<p><strong style="color: #a78bfa;">Company:</strong> ${company}</p>` : ''}
            <p><strong style="color: #a78bfa;">Service:</strong> ${service || 'General Inquiry'}</p>
          </div>
          
          <div style="background: #1a1a1a; padding: 20px; border-radius: 8px;">
            <p><strong style="color: #a78bfa;">Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #2a2a2a; text-align: center; color: #888;">
            <p>This email was sent from the whsofttech contact form.</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
