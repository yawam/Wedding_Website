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

  const comingWith = await db.user.findMany({
    select: {
      comingwith: true,
    },
  });

  const validComingWith = comingWith
    .map((user) => user.comingwith) // Extract the comingwith values
    .filter((value) => value !== null) as number[]; // Filter out null values and cast to number array

  const sumComingWith = validComingWith.reduce((acc, value) => acc + value, 0);

  const glassBackground = {
    background: "rgba(255, 255, 255, 0.1)", // Adjust alpha for transparency
    backdropFilter: "blur(15px)",
  };

  return (
    <Link href="/admin/attendance">
      <Card
        className="transition duration-150 ease-in-out hover:scale-105 shadow-xl"
        style={glassBackground}
      >
        <CardHeader>
          <CardTitle>Attendance</CardTitle>
        </CardHeader>
        <CardContent className="text-[100px] flex justify-center items-center p-2">
          {attendees + sumComingWith}
        </CardContent>
      </Card>
    </Link>
  );
};

export default AttendanceCard;
