import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import AttendanceCard from "./_components/attendance-card";
import VisitorsCard from "./_components/visitors-card";
import FeedbackCard from "./_components/feedback-card";
import AddressCard from "./_components/address-card";
import { auth } from "@clerk/nextjs";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  const { userId } = auth();
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
    <>
      <div className="mx-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <AttendanceCard />
        <VisitorsCard />
        <FeedbackCard />
        <AddressCard />
      </div>
      <main>{children}</main>
    </>
  );
};

export default AdminLayout;
