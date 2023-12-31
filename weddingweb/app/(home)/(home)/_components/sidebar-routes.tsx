import { Separator } from "@/components/ui/separator";
import { NavbarItems } from "./navbar-items";
import { currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";

export const SidebarRoutes = async () => {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;

  const adminData = await db.user.findUnique({
    where: {
      email: email,
    },
  });
  let routes = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Schedule",
      href: "/schedule",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Registry",
      href: "/registry",
    },
  ];

  if (adminData?.isAdmin) {
    routes = [
      ...routes,
      {
        label: "Admin Dashboard",
        href: "/admin/attendance",
      },
    ];
  }

  return (
    <div className="flex flex-col w-full space-y-6 mt text-white">
      {routes.map((route) => (
        <>
          <NavbarItems key={route.href} label={route.label} href={route.href} />
          <Separator />
        </>
      ))}
    </div>
  );
};
