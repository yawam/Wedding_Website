import { currentUser } from "@clerk/nextjs";
import { Roboto_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { NextResponse } from "next/server";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export default async function SchedulePage() {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;

  if (!email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const glassBackground = {
    background: "rgba(255, 255, 255, 0.1)", // Adjust alpha for transparency
    backdropFilter: "blur(15px)",
  };

  return (
    <div className="flex flex-row justify-around items-end h-full bg-[url('/pic.jpg')]">
      <Link
        href="https://www.google.com/maps/place/Jordan+River+Utah+Temple/@40.5663844,-111.9338162,17z/data=!3m1!4b1!4m6!3m5!1s0x87528618b2bb7743:0xdf106a6f3945ed53!8m2!3d40.5663804!4d-111.9312413!16zL20vMGIxemM1?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className=" m-auto w-[475px] h-[225px] p-4 shadow-2xl rounded-md flex flex-col items-center justify-center text-amber-400 transition duration-150 ease-in-out hover:scale-105"
        style={glassBackground}
      >
        <h1 className="text-2xl">Wedding</h1>
        <h2 className={`text-xl ${robotoSerif.className}`}>
          Jordan River Temple
        </h2>
        <p>S Temple Dr, South Jordan, UT</p>
        <p>Saturday April 20th, 2023</p>
        <p>12:00PM</p>
      </Link>
      <Link
        href="https://www.google.com/maps/place/Jordan+River+Utah+Temple/@40.5663844,-111.9338162,17z/data=!3m1!4b1!4m6!3m5!1s0x87528618b2bb7743:0xdf106a6f3945ed53!8m2!3d40.5663804!4d-111.9312413!16zL20vMGIxemM1?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className=" m-auto w-[475px] h-[225px] p-4 shadow-2xl rounded-md flex flex-col items-center justify-center text-amber-400 transition duration-150 ease-in-out hover:scale-105"
        style={glassBackground}
      >
        <h1 className="text-2xl">Reception</h1>
        <h2 className={`text-xl ${robotoSerif.className}`}>
          Jordan River Temple
        </h2>
        <p>S Temple Dr, South Jordan, UT</p>
        <p>Saturday April 20th, 2023</p>
        <p>12:00PM</p>
      </Link>
    </div>
  );
}
