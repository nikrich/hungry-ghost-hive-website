import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the subscription (in production, this would integrate with a newsletter service)
    console.log("Newsletter subscription received:", {
      name,
      email,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with newsletter service (e.g., Mailchimp, ConvertKit)
    // For now, we're just logging the subscription

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to newsletter!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
