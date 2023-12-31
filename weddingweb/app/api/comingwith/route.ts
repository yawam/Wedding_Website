import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { userInfo } from "os";

export async function PATCH(req: Request) {
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
  try {
    console.log(response);

    await db.user.update({
      where: {
        id: userinfo?.id,
      },
      data: {
        comingwith: response,
      },
    });
  } catch (error) {
    console.log("[ADDRESS_UPDATE_ERROR]", error);
  }
  return new NextResponse(response);
}
