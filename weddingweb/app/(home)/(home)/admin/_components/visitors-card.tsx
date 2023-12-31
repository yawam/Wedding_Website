import { db } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const VisitorsCard = async () => {
  const visitors = await db.user.count();
  const glassBackground = {
    background: "rgba(255, 255, 255, 0.1)", // Adjust alpha for transparency
    backdropFilter: "blur(15px)",
  };

  return (
    <Link href="/admin/visitors">
      <Card
        className="transition duration-150 ease-in-out hover:scale-105 shadow-xl"
        style={glassBackground}
      >
        <CardHeader>
          <CardTitle>Visits</CardTitle>
        </CardHeader>
        <CardContent className="text-[100px] flex justify-center items-center p-2">
          {visitors}
        </CardContent>
      </Card>
    </Link>
  );
};

export default VisitorsCard;
