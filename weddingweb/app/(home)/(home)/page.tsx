import { UserButton, auth, currentUser } from "@clerk/nextjs";
import { ComingForm } from "./_components/coming-form";
import { Roboto_Serif } from "next/font/google";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import Link from "next/link";
import Image from "next/image";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export default async function Home() {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;

  if (!email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // const userInfo = await db.user.findUnique({
  //   where: {
  //     email: email,
  //   },
  //   include: {
  //     address: true,
  //   },
  // });

  const userInfo = await db.user.findUnique({
    where: {
      email: email,
    },
    include: {
      address: {
        select: {
          id: true,
          street_address: true,
          city: true,
          state: true,
          zipcode: true,
          userId: true,
        },
      },
    },
  });

  // console.log(userInfo);

  return (
    <>
      <div className=" relative h-full w-full flex flex-col p-4 m-auto overflow-y-auto bg-[url('/resize/rsz_1ring.jpg')] bg-cover text-white md:text-black md:bg-none md:bg-amber-50">
        <Image
          className="md:block absolute aspect-square rounded-lg z-10 shadow-2xl hidden h-[250px] w-[250px] top-[50px] right-[70px] rotate-[25deg]"
          src={"/resize/rsz_1sign-in-page.jpg"}
          width={300}
          height={300}
          alt="holding image"
        />
        <Image
          className="md:block absolute aspect-square rounded-lg z-0 shadow-2xl hidden h-[250px] w-[250px] bottom-[40px] right-[200px] -rotate-12"
          src={"/resize/rsz_1holding hands.jpg"}
          width={300}
          height={300}
          alt="holding image"
        />
        <Image
          className="md:block absolute aspect-square rounded-lg z-10 shadow-2xl hidden h-[250px] w-[250px] top-[50px] left-[70px] -rotate-[25deg]"
          src={"/resize/rsz_standingtogether_2.jpg"}
          width={300}
          height={300}
          alt="holding image"
        />
        <Image
          className="md:block absolute aspect-square rounded-lg z-0 shadow-2xl hidden h-[250px] w-[250px] bottom-[40px] left-[200px] rotate-12"
          src={"/resize/rsz_standingtogether_1.jpg"}
          width={300}
          height={300}
          alt="holding image"
        />
        <div className="flex flex-col p-4 justify-center items-center z-40 bg-black rounded-lg bg-opacity-25 md:bg-transparent md:rounded-none md:bg-opacity-100">
          <h2 className="text-2xl text-bold font-serif my-2">
            Welcome {user?.firstName}!{" "}
          </h2>
          <p className="tracking-[.2em] text-2xl text-bold">
            Thank you for visiting our website
          </p>
        </div>
        <div className="flex h-full p-2 justify-center items-center z-40 bg-black rounded-lg bg-opacity-20 md:bg-transparent md:rounded-none md:bg-opacity-100 ">
          <h1 className={`text-[2em] ${robotoSerif.className}`}>
            We&apos;re getting married
          </h1>
        </div>
        <div className="flex flex-col p2 justify-center items-center my-6 z-40 bg-black rounded-lg bg-opacity-25 md:bg-transparent md:rounded-none md:bg-opacity-100 ">
          <h2 className="text-2xl text-bold font-serif my-2">
            Are you Coming?
          </h2>
          <p className=" tracking-widest">Tell us!</p>
          <ComingForm
            //@ts-ignore
            initialData={userInfo}
          />
          <Link
            className="absolute bottom-0 right-2 italic ml-auto p-6 text-sm underline"
            href="/feedback"
          >
            <p>Give us Feedback </p>
          </Link>
        </div>
      </div>
    </>
  );
}
