import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // TODO: Integrate with newsletter service (e.g., Mailchimp, ConvertKit)
    console.log("Newsletter subscription:", {
      name,
      email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Successfully subscribed!" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 },
    );
  }
}
