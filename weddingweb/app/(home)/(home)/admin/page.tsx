import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const AdminPage = async () => {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;

  if (!email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

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
  return (
    <div>This is the admin page where you can get analytics of every kind</div>
  );
};

export default AdminPage;
