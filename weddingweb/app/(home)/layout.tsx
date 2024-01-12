import { UserButton } from "@clerk/nextjs";
import { Navbar } from "./(home)/_components/navbar";
import { MobileSidebar } from "./(home)/_components/mobile-sidebar";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="w-full h-[120px] fixed inset-y-0 z-50 px-4 pb-2 bg-orange-900">
        <div className="flex flex-col items-center justify-center max-w-[50%] mx-auto">
          <h1
            className={`my-2 text-xl font-bold text-white italic ${playfairDisplay.className}`}
          >
            Freda & Papa Yaw
          </h1>
          <p className="text-lg font-bold text-white">April 20th 2023</p>
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
      <main className="h-full pt-[120px]">{children}</main>
    </div>
  );
}
