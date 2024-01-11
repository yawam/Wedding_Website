import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen h-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          className="object-cover w-full h-full rounded-lg"
          src={"/resize/rsz_1sign-in-page.jpg"}
          alt="next-image"
          layout="fill"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AuthLayout;
