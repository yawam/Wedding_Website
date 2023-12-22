import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import FeedbackForm from "../_components/feedback-form";
import { Card, CardContent } from "@/components/ui/card";

const FeedbackPage = async () => {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;

  if (!email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const userInfo = await db.user.findUnique({
    where: {
      email: email,
    },
    include: {
      feedbacks: true,
    },
  });

  if (userInfo) {
    return (
      <div className="max-w-[500px] m-auto flex flex-col justify-center items-center h-full space-y-4">
        <Card>
          <CardContent>
            <p>
              This is only the second website I have shipped to production.
              Please feel free to leave me some feedback. The good, the bad, and
              the ugly
            </p>
            <FeedbackForm />
          </CardContent>
        </Card>
      </div>
    );
  }
};

export default FeedbackPage;
