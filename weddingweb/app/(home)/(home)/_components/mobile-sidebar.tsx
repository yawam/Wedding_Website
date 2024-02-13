import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Navbar } from "./navbar";
import { SidebarRoutes } from "./sidebar-routes";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className=" text-white md:hidden pr-4 hover:opacity-75 transition">
        <Menu
          style={{ color: "white" }}
          size={35}
          className=" border-2 shadow-2xl border-transparent bg-neutral-700 bg-opacity-50 rounded-md"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-2 bg-orange-800 flex flex-col h-auto"
      >
        <SheetClose>
          <SidebarRoutes />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
