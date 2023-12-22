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

  return (
    <Link href="/admin/visitors">
      <Card>
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
