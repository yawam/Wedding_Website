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
    <div className="relative flex flex-col md:flex-row p-6 justify-around items-end h-full bg-[url('/resize/rsz_1ring.jpg')] bg-cover bg-center md:bg-none md:bg-amber-50">
      <Link
        href="https://www.google.com/maps/place/Jordan+River+Utah+Temple/@40.5663844,-111.9338162,17z/data=!3m1!4b1!4m6!3m5!1s0x87528618b2bb7743:0xdf106a6f3945ed53!8m2!3d40.5663804!4d-111.9312413!16zL20vMGIxemM1?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        className=" relative m-auto w-[375px] h-[225px] md:w-[475px] md:h-[225px] p-4 shadow-2xl rounded-md flex flex-col items-center justify-center bg-black bg-opacity-50 text-white transition duration-150 ease-in-out hover:scale-105"
      >
        <h1 className="text-2xl">Temple Wedding</h1>
        <h2 className={`text-xl ${robotoSerif.className}`}>
          Jordan River Temple
        </h2>
        <p>S Temple Dr, South Jordan, UT</p>
        <p>Saturday April 20th, 2024</p>
        <p>12:00 PM</p>
        <p className="absolute bottom-2 right-2 italic underline">
          Click card for directions
        </p>
      </Link>
      <Link
        href="https://www.google.com/maps/place/1409+W+Shields+Ln,+South+Jordan,+UT+84095/@40.5731103,-111.9320216,17z/data=!4m5!3m4!1s0x875288a0509f91db:0x97b0fd934f41ef81!8m2!3d40.5731103!4d-111.9320216"
        target="_blank"
        rel="noopener noreferrer"
        className=" relative  m-auto w-[375px] h-[225px] md:w-[475px] md:h-[225px] p-4 shadow-2xl rounded-md flex flex-col items-center justify-center bg-black bg-opacity-50 text-white transition duration-150 ease-in-out hover:scale-105"
      >
        <h1 className="text-2xl">Reception</h1>
        <h2 className={`text-xl ${robotoSerif.className}`}>River Ridge Ward</h2>
        <p>1409 W Shields Ln, South Jordan, UT 84095</p>
        <p>Saturday April 20th, 2024</p>
        <p>3:30 PM</p>
        <p className="absolute bottom-2 right-2 italic underline">
          Click card for directions
        </p>
      </Link>
    </div>
  );
}
