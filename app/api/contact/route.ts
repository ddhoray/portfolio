export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request?.json?.();
    const name = data?.name ?? '';
    const email = data?.email ?? '';
    const subject = data?.subject ?? '';
    const message = data?.message ?? '';
    const formType = data?.formType ?? 'professional';

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Name, email, and message are required.' }, { status: 400 });
    }

    // Save to database
    await prisma.contactSubmission.create({
      data: { name, email, subject, message, formType, status: 'new' },
    });

    // Send notification email
    const isProfessional = formType === 'professional';
    const notifId = isProfessional
      ? process.env.NOTIF_ID_PROFESSIONAL_CONTACT_FORM
      : process.env.NOTIF_ID_CYBERSAFETT_CONTACT_FORM;
    const recipientEmail = isProfessional ? 'daren@dhoray.com' : 'daren@cybersafett.com';

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #DC2626; border-bottom: 2px solid #2D3748; padding-bottom: 10px;">
          New ${isProfessional ? 'Professional' : 'CyberSafeTT'} Contact Form Submission
        </h2>
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #DC2626;">
            ${message}
          </div>
        </div>
        <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toISOString()}</p>
      </div>
    `;

    try {
      const appUrl = process.env.NEXTAUTH_URL || 'https://dhoray.com';
      let senderEmail = 'noreply@dhoray.com';
      try { senderEmail = `noreply@${new URL(appUrl).hostname}`; } catch { /* use default */ }

      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: notifId,
          subject: `New ${isProfessional ? 'Professional' : 'CyberSafeTT'} Inquiry from ${name}`,
          body: htmlBody,
          is_html: true,
          recipient_email: recipientEmail,
          sender_email: senderEmail,
          sender_alias: 'DHORAY Portfolio',
        }),
      });
    } catch (emailError) {
      console.error('Email notification error:', emailError);
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 });
  }
}
