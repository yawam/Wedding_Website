import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";

export async function POST(req: Request) {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;
  const userinfo = await db.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    return new NextResponse("Unauthorized", { status: 400 });
  }

  const response = await req.json();
  console.log(response);

  // implement database logic to add feedback
  try {
    await db.feedback.create({
      data: {
        userId: userinfo?.id,
        description: response.feedback,
      },
    });
  } catch (error) {
    console.log("[Feedback Database Input failed]", error);
  }

  return new NextResponse(response);
}
