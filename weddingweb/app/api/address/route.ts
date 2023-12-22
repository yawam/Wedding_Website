import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

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
    await db.address.upsert({
      where: {
        userId: userinfo?.id,
      },
      update: {
        street_address: response.streetAddress,
        city: response.city,
        state: response.state,
        zipcode: response.zipCode,
      },
      create: {
        userId: userinfo?.id,
        street_address: response.streetAddress,
        city: response.city,
        state: response.state,
        zipcode: response.zipCode,
      },
    });
  } catch (error) {
    console.log("[ADDRESS_UPDATE_ERROR]", error);
  }
  return new NextResponse(response);
}
