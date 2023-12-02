import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Navbar } from "./navbar";
import { SidebarRoutes } from "./sidebar-routes";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-2 bg-orange-800 ">
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  );
};
