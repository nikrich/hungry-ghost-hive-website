import { NextRequest, NextResponse } from "next/server";

interface ContactRequest {
  name?: string;
  email?: string;
  message?: string;
}

interface NewsletterRequest {
  email?: string;
  name?: string;
}

// Helper to validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest | NewsletterRequest = await request.json();

    // Validate required fields
    if (!body.email || !body.email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email.trim())) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // For contact form requests, validate message
    if ("message" in body) {
      if (!body.message || !body.message.trim()) {
        return NextResponse.json(
          { error: "Message is required" },
          { status: 400 }
        );
      }

      if (!body.name || !body.name.trim()) {
        return NextResponse.json(
          { error: "Name is required" },
          { status: 400 }
        );
      }

      // Log contact form submission
      console.log("Contact form submission:", {
        name: body.name.trim(),
        email: body.email.trim(),
        message: body.message.trim(),
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your message. We will get back to you soon.",
        },
        { status: 200 }
      );
    }

    // For newsletter requests
    if (!body.name || !body.name.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    // Log newsletter subscription
    console.log("Newsletter subscription:", {
      name: body.name.trim(),
      email: body.email.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing to our newsletter.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
