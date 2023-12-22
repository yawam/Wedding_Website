import { db } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const AddressCard = async () => {
  const addressNeeded = await db.address.count();

  return (
    <Link href="/admin/attendance">
      <Card>
        <CardHeader>
          <CardTitle>Physical Invites Needed</CardTitle>
        </CardHeader>
        <CardContent className="text-[100px] flex justify-center items-center p-2">
          {addressNeeded}
        </CardContent>
      </Card>
    </Link>
  );
};

export default AddressCard;
