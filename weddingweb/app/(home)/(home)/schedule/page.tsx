import { Roboto_Serif } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export default function SchedulePage() {
  return (
    <div className="flex flex-col w-full h-full p-4 space-y-4">
      <div className="flex flex-row justify-around">
        <div className=" aspect-video rounded-md shadow-md">
          <Image
            alt="templeImage"
            src="/Jordan-River-Temple-daytime.jpg"
            width={600}
            height={350}
            className=" aspect-video rounded-md shadow-lg"
          />
        </div>
        <div className=" bg-slate-400 w-[600px] mx-6 flex flex-col items-center justify-center text-amber-400">
          <h2 className={`text-2xl ${robotoSerif.className}`}>
            Jordan River Temple
          </h2>
          <Link
            href="https://www.google.com/maps/place/Jordan+River+Utah+Temple/@40.5663844,-111.9338162,17z/data=!3m1!4b1!4m6!3m5!1s0x87528618b2bb7743:0xdf106a6f3945ed53!8m2!3d40.5663804!4d-111.9312413!16zL20vMGIxemM1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>S Temple Dr, South Jordan, UT</p>
          </Link>
          <p>Saturday April 20th, 2023</p>
          <p>12:00PM</p>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-around">
        <div className=" aspect-video rounded-md shadow-lg">
          <Image
            alt="MeetingHouseImage"
            src="/Chapel.jpg"
            width={600}
            height={350}
            className=" aspect-video rounded-md shadow-md"
          />
        </div>
        <div className=" bg-slate-400 w-[600px] mx-6 flex flex-col items-center justify-center text-amber-400">
          <h2 className={`text-2xl ${robotoSerif.className}`}>
            Jordan River Temple
          </h2>
          <Link
            href="https://www.google.com/maps/place/Jordan+River+Utah+Temple/@40.5663844,-111.9338162,17z/data=!3m1!4b1!4m6!3m5!1s0x87528618b2bb7743:0xdf106a6f3945ed53!8m2!3d40.5663804!4d-111.9312413!16zL20vMGIxemM1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>S Temple Dr, South Jordan, UT</p>
          </Link>
          <p>Saturday April 20th, 2023</p>
          <p>12:00PM</p>
        </div>
      </div>
    </div>
  );
}
