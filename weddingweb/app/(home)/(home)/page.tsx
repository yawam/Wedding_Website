import { UserButton, auth, currentUser } from "@clerk/nextjs";
import ComingForm from "./_components/coming-form";
import { Roboto_Serif } from "next/font/google";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="h-full w-full flex flex-col p-4 m-auto">
      <div className="flex flex-col p-2 justify-center items-center ">
        <h2 className="text-2xl text-bold font-serif my-2">
          Welcome {user?.firstName}!{" "}
        </h2>
        <p className="tracking-widest">Thank you for visiting our website</p>
      </div>
      <div className="flex h-full p-2 justify-center items-center ">
        <h1 className={`text-4xl ${robotoSerif.className}`}>
          We&apos;re getting married
        </h1>
      </div>
      <div className="flex flex-col p2 justify-center items-center my-6">
        <h2 className="text-2xl text-bold font-serif my-2">Are you Coming?</h2>
        <p className=" tracking-widest">Tell us!</p>
        <ComingForm />
      </div>
    </div>
  );
}
