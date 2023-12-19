import { db } from "@/lib/db";
import { NavbarItems } from "./navbar-items";
import { currentUser } from "@clerk/nextjs";

export const NavbarRoutes = async () => {
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
        href: "/admin",
      },
    ];
  }

  return (
    <div className="hidden md:flex flex-row w-full space-x-10">
      {routes.map((route) => (
        <NavbarItems key={route.href} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
