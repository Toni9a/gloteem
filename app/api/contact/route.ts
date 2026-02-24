import { NextRequest, NextResponse } from 'next/server';
import { INTEGRATIONS } from '@/config/integrations';

// This is a placeholder implementation. To enable email functionality:
// 1. Install Resend: npm install resend
// 2. Get your Resend API key from https://resend.com
// 3. Add RESEND_API_KEY to your .env.local
// 4. Uncomment the code below

// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, organisation, enquiryType, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Implement email sending with Resend or your preferred email service
    // Example with Resend:
    // const result = await resend.emails.send({
    //   from: 'noreply@gloteemconsulting.com',
    //   to: INTEGRATIONS.email.contact,
    //   replyTo: email,
    //   subject: `New Contact Form Submission - ${enquiryType}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${fullName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Organisation:</strong> ${organisation || 'Not provided'}</p>
    //     <p><strong>Enquiry Type:</strong> ${enquiryType}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });
    //
    // // Send auto-reply to user
    // await resend.emails.send({
    //   from: 'noreply@gloteemconsulting.com',
    //   to: email,
    //   subject: 'We received your message - Gloteem Consulting',
    //   html: `
    //     <h2>Thank you for contacting Gloteem Consulting</h2>
    //     <p>Hi ${fullName},</p>
    //     <p>We have received your message and will be in touch within 2 business days.</p>
    //     <p>In the meantime, feel free to book a consultation directly on our website.</p>
    //     <p>Best regards,<br>Gloteem Consulting</p>
    //   `,
    // });

    // For now, return success (replace with actual email implementation)
    console.log('Contact form submitted:', {
      fullName,
      email,
      organisation,
      enquiryType,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
