import { currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

const FeedbackPage = async () => {
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

  const address = await db.address.findMany({
    include: {
      user: { select: { firstname: true, lastname: true } },
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
        Checkout who need&apos;s a physical address
      </h2>
      {address.length === 0 ? (
        <p>No one needs a physical invite yet</p>
      ) : (
        <table className="w-full bg-white bg-opacity-10 rounded-md overflow-hidden">
          <thead className="text-amber-400">
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">From</th>
              {/* Add other table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {address.map((info, key) => (
              <tr key={key} className="bg-white bg-opacity-5">
                <td className="py-2 px-4 border-b m-auto">
                  {info.street_address} {info.city} {info.state} {info.zipcode}
                </td>
                <td className="py-2 px-4 border-b m-auto">
                  {info.user?.firstname} {info.user?.lastname}
                </td>
                {/* Add other table cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FeedbackPage;
