/**
 * Professional HTML email template for contact form submissions.
 * Proper email format: header, meta (date/subject), sender block, message body, footer.
 * Royal red & cream theme, table-based layout for email client compatibility.
 */
export function getContactEmailHtml(params: {
  name: string;
  email: string;
  company?: string;
  message: string;
  service: string;
}) {
  const { name, email, company, message, service } = params;
  const serviceLabel = service && service !== "general" ? service.replace(/-/g, " ") : "General Inquiry";
  const dateStr = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>New Contact – whsofttech</title>
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #faf8f5; color: #1a1a1a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #faf8f5;">
    <tr>
      <td align="center" style="padding: 32px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(139, 0, 0, 0.08); border: 1px solid #eee;">
          <!-- Letterhead / Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8B0000 0%, #A52A2A 100%); padding: 24px 32px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">whsofttech</h1>
              <p style="margin: 4px 0 0; color: rgba(255,255,255,0.9); font-size: 13px;">Contact Form Submission</p>
            </td>
          </tr>
          <!-- Meta: Date & Subject (proper email format) -->
          <tr>
            <td style="padding: 16px 32px 8px; border-bottom: 1px solid #eee;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="font-size: 12px; color: #6b6b6b;">
                    <strong>Date:</strong> ${escapeHtml(dateStr)} &nbsp;|&nbsp; <strong>Subject:</strong> ${escapeHtml(serviceLabel)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Sender details (From block) -->
          <tr>
            <td style="padding: 24px 32px 16px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #faf8f5; border-radius: 8px; border-left: 4px solid #8B0000;">
                <tr>
                  <td style="padding: 16px 20px;">
                    <p style="margin: 0 0 6px; font-size: 11px; color: #6b6b6b; text-transform: uppercase; letter-spacing: 0.5px;">From</p>
                    <p style="margin: 0; font-size: 16px; color: #1a1a1a; font-weight: 600;">${escapeHtml(name)}</p>
                    <p style="margin: 4px 0 0; font-size: 14px;"><a href="mailto:${escapeHtml(email)}" style="color: #8B0000; text-decoration: none;">${escapeHtml(email)}</a></p>
                    ${company ? `<p style="margin: 8px 0 0; font-size: 14px; color: #4a4a4a;">Company: ${escapeHtml(company)}</p>` : ""}
                    <p style="margin: 6px 0 0; font-size: 13px; color: #6b6b6b;">Service: ${escapeHtml(serviceLabel)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Message body -->
          <tr>
            <td style="padding: 0 32px 24px;">
              <p style="margin: 0 0 8px; font-size: 11px; color: #6b6b6b; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <div style="padding: 16px; background-color: #faf8f5; border-radius: 8px; border: 1px solid #eee; font-size: 15px; line-height: 1.6; color: #1a1a1a; white-space: pre-wrap;">${escapeHtml(message)}</div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 16px 32px; background-color: #faf8f5; border-top: 1px solid #eee; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #888;">Sent via whsofttech contact form. Reply directly to the sender's email above.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return String(text).replace(/[&<>"']/g, (c) => map[c] ?? c);
}
