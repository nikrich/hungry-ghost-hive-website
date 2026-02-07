import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

// Validation patterns
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 100;
const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;

function validateContactData(
  data: unknown,
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (typeof data !== "object" || data === null) {
    return { valid: false, errors: ["Invalid request format"] };
  }

  const { name, email, message } = data as Record<string, unknown>;

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

  // Validate message
  if (!message) {
    errors.push("Message is required");
  } else if (typeof message !== "string") {
    errors.push("Message must be a string");
  } else if (message.length < MIN_MESSAGE_LENGTH) {
    errors.push(`Message must be at least ${MIN_MESSAGE_LENGTH} characters`);
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.push(`Message must not exceed ${MAX_MESSAGE_LENGTH} characters`);
  }

  return { valid: errors.length === 0, errors };
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
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
    const { valid, errors } = validateContactData(body);
    if (!valid) {
      return NextResponse.json(
        { error: errors.join("; ") },
        { status: 400 },
      );
    }

    const { name, email, message } = body as ContactFormData;

    // TODO: Integrate with email service (e.g., Resend, SendGrid)
    console.log("Contact form submission:", {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "unknown",
    });

    return NextResponse.json(
      { success: true, message: "Thank you! We'll get back to you soon." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form. Please try again later." },
      { status: 500 },
    );
  }
}
