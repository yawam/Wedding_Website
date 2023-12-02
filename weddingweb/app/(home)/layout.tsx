import { UserButton } from "@clerk/nextjs";
import { Navbar } from "./(home)/_components/navbar";
import { MobileSidebar } from "./(home)/_components/mobile-sidebar";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="w-full h-[130px] fixed inset-y-0 z-50 px-4 pb-2 bg-orange-900">
        <div className="flex justify-center items-center">
          <h1 className=" my-6 text-3xl font-bold text-white">
            Freda & Papa Yaw
          </h1>
        </div>
        <div className="flex item w-full ">
          <div>
            <MobileSidebar />
          </div>
          <div className=" flex justify-center items-end ml-auto">
            <Navbar />
          </div>
          <div className="flex justify-center items-center ml-auto">
            <UserButton />
          </div>
        </div>
      </div>
      <main className="h-full pt-[140px]">{children}</main>
    </div>
  );
}
