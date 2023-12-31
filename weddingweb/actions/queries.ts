import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function getUserAuth() {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;

  const adminData = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!adminData?.isAdmin) {
    return new NextResponse("This page is only accessible to admins", {
      status: 401,
    });
  }
}

export async function getAttendees() {
  const attendees = await db.user.findMany({
    where: {
      isAttending: true,
    },
  });

  return { attendees };
}
