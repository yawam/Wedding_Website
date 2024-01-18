import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Roboto_Serif } from "next/font/google";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export default function GalleryPage() {
  const imageLinks = [
    { href: "/website_gallery-pics/611.jpeg" },
    { href: "/website_gallery-pics/669.jpeg" },
    { href: "/website_gallery-pics/906.jpeg" },
    { href: "/website_gallery-pics/932.jpeg" },
    { href: "/website_gallery-pics/2360.jpeg" },
    { href: "/website_gallery-pics/4006.jpeg" },
    { href: "/website_gallery-pics/4008.jpeg" },
    { href: "/website_gallery-pics/5776.jpeg" },
    // { href: "/website_gallery-pics/7389.jpeg" },
    { href: "/website_gallery-pics/17331.jpeg" },
    { href: "/website_gallery-pics/17428.jpeg" },
    { href: "/website_gallery-pics/17976.jpeg" },
    { href: "/website_gallery-pics/19053.jpeg" },
    { href: "/website_gallery-pics/IMG_3786.jpg" },
    { href: "/website_gallery-pics/IMG_4075.jpg" },
    { href: "/website_gallery-pics/IMG_4077.jpg" },
    { href: "/website_gallery-pics/IMG_4080.jpg" },
    { href: "/website_gallery-pics/IMG_4088.jpg" },
    { href: "/website_gallery-pics/IMG_4158.jpg" },
    { href: "/website_gallery-pics/IMG_4318.jpg" },
    { href: "/website_gallery-pics/IMG_4661.jpg" },
    { href: "/website_gallery-pics/IMG_4809.jpg" },
    { href: "/website_gallery-pics/IMG_5034.jpg" },
    { href: "/website_gallery-pics/IMG_5676.jpg" },
    { href: "/website_gallery-pics/IMG_5695.jpg" },
    { href: "/website_gallery-pics/IMG_5730.jpg" },
    { href: "/website_gallery-pics/IMG_5799.jpg" },
    { href: "/website_gallery-pics/IMG_6896.jpg" },
    { href: "/photoshoot/home.JPG" },
    { href: "/photoshoot/IMG_6811.JPG" },
    { href: "/photoshoot/IMG_6814.JPG" },
    { href: "/photoshoot/IMG_6823.JPG" },
    { href: "/photoshoot/IMG_6827.JPG" },
    { href: "/photoshoot/IMG_6849.JPG" },
    { href: "/photoshoot/IMG_6852.JPG" },
    { href: "/photoshoot/ring.JPG" },
    { href: "/photoshoot/sign-in-page.JPG" },
    { href: "/photoshoot/StandingTogether1.JPG" },
    { href: "/photoshoot/standingTogether2.JPG" },
    { href: "/photoshoot/standingTogether3.JPG" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-center items-center">
        <h1 className={`text-xl ${robotoSerif.className}`}>Gallery</h1>
      </div>
      <div className=" grid grid-cols-3 gap-4 md:grid-cols-4 md:max-w-[600px] m-auto ">
        {imageLinks.map((image, key) => (
          <Dialog key={key}>
            <DialogTrigger asChild>
              <Image
                className=" aspect-square w- shadow-xl rounded-lg transition duration-150 ease-in-out hover:scale-105"
                height={300}
                width={280}
                src={image.href}
                alt=""
                loading="lazy"
              />
            </DialogTrigger>
            <DialogContent>
              <Image
                className=" aspect-square shadow-xl rounded-lg"
                height={300}
                width={280}
                src={image.href}
                alt=""
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
