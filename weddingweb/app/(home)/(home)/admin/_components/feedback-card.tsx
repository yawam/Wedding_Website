import { db } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const FeedbackCard = async () => {
  const feedback = await db.feedback.count();

  return (
    <Link href="/admin/feedback">
      <Card>
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
        </CardHeader>
        <CardContent className="text-[100px] flex justify-center items-center p-2">
          {feedback}
        </CardContent>
      </Card>
    </Link>
  );
};

export default FeedbackCard;
