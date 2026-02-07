import { NextRequest, NextResponse } from "next/server";

interface NewsletterFormData {
  name: string;
  email: string;
}

interface NewsletterResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

// Validation patterns
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 100;

function validateNewsletterData(
  data: unknown,
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (typeof data !== "object" || data === null) {
    return { valid: false, errors: ["Invalid request format"] };
  }

  const { name, email } = data as Record<string, unknown>;

  // Validate name
  if (!name) {
    errors.push("Name is required");
  } else if (typeof name !== "string") {
    errors.push("Name must be a string");
  } else if (name.length < MIN_NAME_LENGTH) {
    errors.push(`Name must be at least ${MIN_NAME_LENGTH} characters`);
  } else if (name.length > MAX_NAME_LENGTH) {
    errors.push(`Name must not exceed ${MAX_NAME_LENGTH} characters`);
  }

  // Validate email
  if (!email) {
    errors.push("Email is required");
  } else if (typeof email !== "string") {
    errors.push("Email must be a string");
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push("Please provide a valid email address");
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest): Promise<NextResponse<NewsletterResponse>> {
  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON format" },
        { status: 400 },
      );
    }

    // Validate request data
    const { valid, errors } = validateNewsletterData(body);
    if (!valid) {
      return NextResponse.json(
        { error: errors.join("; ") },
        { status: 400 },
      );
    }

    const { name, email } = body as NewsletterFormData;

    // TODO: Integrate with newsletter service (e.g., Mailchimp, ConvertKit)
    console.log("Newsletter subscription:", {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "unknown",
    });

    return NextResponse.json(
      { success: true, message: "Successfully subscribed! Check your email for confirmation." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 },
    );
  }
}
