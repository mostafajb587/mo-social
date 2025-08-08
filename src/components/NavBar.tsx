import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between h-24 px-4">
      {/* left */}
      <div className="font-bold text-xl text-blue-600 md:hidden lg:block w-[20%]">
        <Link href={"/"}>MoSocial</Link>
      </div>

      {/* center */}
      <div className="hidden md:flex  justify-center items-center">
        <div className="flex gap-5 text-gray-600">
          <Link href={"/"} className="flex gap-2 ">
            <Image
              src="/icons8-home-50.png"
              alt="HomePage"
              width={20}
              height={20}
            />
            <span>HomePage</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src="/icons8-user-groups-50.png"
              alt="Friends"
              width={20}
              height={20}
            />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              src="/icons8-add-50.png"
              alt="Stories"
              width={20}
              height={20}
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>

      {/* right */}
      <div className="md:hidden w-[20%] flex justify-end">
        <MobileMenu />
      </div>
    </div>
  );
}
