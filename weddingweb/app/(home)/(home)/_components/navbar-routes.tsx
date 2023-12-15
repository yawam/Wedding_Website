import { NavbarItems } from "./navbar-items";

export const NavbarRoutes = () => {
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
    <div className="hidden md:flex flex-row w-full space-x-10">
      {routes.map((route) => (
        <NavbarItems key={route.href} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
