import { db } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const AttendanceCard = async () => {
  const attendees = await db.user.count({
    where: {
      isAttending: true,
    },
  });

  return (
    <Link href="/admin/attendance">
      <Card>
        <CardHeader>
          <CardTitle>Attendance</CardTitle>
        </CardHeader>
        <CardContent className="text-[100px] flex justify-center items-center p-2">
          {attendees}
        </CardContent>
      </Card>
    </Link>
  );
};

export default AttendanceCard;
