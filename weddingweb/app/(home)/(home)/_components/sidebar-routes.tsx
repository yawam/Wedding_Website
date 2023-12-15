import { Separator } from "@/components/ui/separator";
import { NavbarItems } from "./navbar-items";

export const SidebarRoutes = () => {
  const routes = [
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
