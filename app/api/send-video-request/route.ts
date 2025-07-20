import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // For now, we'll just log the data and return success
    // In production, you'd send this to your email service or CRM
    console.log('Video Request Form Submission:', body);
    
    // TODO: Send email to bert@groundmounts.com with the form data
    // TODO: Store in database if needed
    // TODO: Send confirmation email to user
    
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