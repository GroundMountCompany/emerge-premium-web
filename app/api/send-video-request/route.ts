import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Video Request Form Submission:', body);
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Emerge Premium <no-reply@emergepremium.com>',
      to: ['info@emergepremium.com'],
      subject: 'New Video Request Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF7A35;">New Video Request Submission</h2>
          <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
          <p><strong>Industry:</strong> ${body.industry || 'Not provided'}</p>
          <p><strong>Name:</strong> ${body.name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${body.email || 'Not provided'}</p>
          <p><strong>Aesthetic:</strong> ${body.aesthetic || 'Not provided'}</p>
          <p><strong>Tone:</strong> ${body.tone || 'Not provided'}</p>
          <p><strong>Length:</strong> ${body.length || 'Not provided'}</p>
          <p><strong>Scenes:</strong> ${body.scenes || 'Not provided'}</p>
          <p><strong>Script:</strong> ${body.script || 'Not provided'}</p>
          <p><strong>Reference Link:</strong> ${body.referenceLink || 'Not provided'}</p>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, message: 'Failed to send email notification' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Your video request has been submitted successfully!' 
    });
    
  } catch (error) {
    console.error('Error processing video request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit video request' },
      { status: 500 }
    );
  }
} 