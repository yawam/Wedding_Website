import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;
  if (!user) {
    return new NextResponse("Unauthorized", { status: 400 });
  }

  const response = await req.json();
  try {
    await db.user.update({
      where: {
        email: email,
      },
      data: {
        isAttending: response,
      },
    });
  } catch (error) {
    console.log("[ISATTENDING_UPDATE_ERROR]", error);
  }
  return new NextResponse(response);
}
