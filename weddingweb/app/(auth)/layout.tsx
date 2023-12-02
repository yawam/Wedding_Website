import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-stone-300 min-h-screen h-full">
      <div className="flex flex-row space-x-5">
        {/* <Image
          className="w-full max-w-xs rounded-lg"
          src={"/pic.jpg"}
          alt="next-image"
          width={800}
          height={500}
        /> */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
