// For App Router: app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

// Define the same schema as in your form
const contactSchema = z.object({
  name: z.string().min(2, { message: "სახელი უნდა შეიცავდეს მინიმუმ 2 ასოს" }),
  email: z.string().email({ message: "მეილი არასწორია" }),
  message: z
    .string()
    .min(10, { message: "ტექსტი უნდა იყოს მინიმუმ 10 ასოიანი" }),
  subject: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the incoming data
    const validatedData = contactSchema.parse(body);

    // Here you can handle the contact form submission
    // For example:
    // 1. Save to database
    // 2. Send email
    // 3. Send to third-party service

    // Example: Log to console (replace with your actual logic)
    console.log("Contact form submission:", validatedData);

    // TODO: Add your actual implementation here
    // Examples:
    // - Save to database
    // - Send email using nodemailer, sendgrid, etc.
    // - Send to a webhook

    // For now, just simulate success
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate processing time

    return NextResponse.json(
      { message: "მესიჯი წარმატებით გაიგზავნა" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "არასწორი მონაცემები", errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "შეცდომა მოხდა" }, { status: 500 });
  }
}

// If you're using Pages Router instead, use this format:
// pages/api/contact.ts
/*
import { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "სახელი უნდა შეიცავდეს მინიმუმ 2 ასოს" }),
  email: z.string().email({ message: "მეილი არასწორია" }),
  message: z
    .string()
    .min(10, { message: "ტექსტი უნდა იყოს მინიმუმ 10 ასოიანი" }),
  subject: z.string().optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const validatedData = contactSchema.parse(req.body);
    
    console.log("Contact form submission:", validatedData);
    
    // TODO: Add your actual implementation here
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return res.status(200).json({ message: "მესიჯი წარმატებით გაიგზავნა" });
    
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "არასწორი მონაცემები",
        errors: error.errors,
      });
    }
    
    return res.status(500).json({ message: "შეცდომა მოხდა" });
  }
}
*/
