import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Loops API integration
    const loopsApiKey = process.env.LOOPS_API_KEY;
    
    if (!loopsApiKey) {
      console.error('LOOPS_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${loopsApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source: 'Clervio Waitlist',
        subscribed: true,
        userGroup: 'waitlist',
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Loops API error:', errorData);
      
      // Handle duplicate email case
      if (response.status === 409) {
        return NextResponse.json(
          { message: 'You\'re already on our waitlist!' },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to add to waitlist' },
        { status: 500 }
      );
    }

    const data = await response.json();
    
    return NextResponse.json(
      { message: 'Successfully added to waitlist!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}