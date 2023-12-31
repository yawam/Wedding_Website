import { currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

const AttendancePage = async () => {
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

  const attendees = await db.user.findMany({
    where: {
      isAttending: true,
    },
  });

  if (!adminData?.isAdmin) {
    return new NextResponse("This page is only accessible to admins", {
      status: 401,
    });
  }
  return (
    <div className="bg-blur p-8 rounded-lg">
      <h2 className="text-2xl mb-4">
        Checkout who&apos;s coming for your wedding
      </h2>
      <table className="w-full bg-white bg-opacity-10 rounded-md overflow-hidden">
        <thead className="text-amber-400">
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">No. coming with</th>
            {/* Add other table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee, key) => (
            <tr key={key} className="bg-white bg-opacity-5">
              <td className="py-2 px-4 border-b">
                {attendee.firstname} {attendee.lastname}
              </td>
              <td className="py-2 px-4 border-b">{attendee.comingwith}</td>
              {/* Add other table cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendancePage;
