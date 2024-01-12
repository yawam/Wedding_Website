import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function DonationsPage() {
  return (
    <div className="flex justify-center items-center p-6 h-full bg-[url('/resize/rsz_1rsz_2standingtogether3.jpg')] bg-cover bg-center md:bg-top">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.amazon.com/wedding/registry/364RGBEJJ19QW"
        className="flex flex-col justify-center items-center p-2 bg-black bg-opacity-25 rounded-lg shadow-2xl transition duration-150 ease-in-out hover:scale-105"
      >
        <h2
          className={`text-white text-lg italic ${playfairDisplay.className} `}
        >
          Checkout our amazon registry.
        </h2>
        <Image
          className="w-[100%] rounded-lg shadow-2xl"
          src="/resize/registry_screenshot.jpg"
          width={300}
          height={300}
          alt="registryImage"
        />
      </Link>
    </div>
  );
}
