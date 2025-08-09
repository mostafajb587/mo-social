import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between h-24 px-4">
      {/* left */}
      <div className="font-bold text-xl text-blue-600 md:hidden lg:block w-[20%]">
        <Link href={"/"}>MoSocial</Link>
      </div>

      {/* center */}
      <div className="hidden md:flex w-[50%] text-sm justify-between items-center">
        <div className="flex gap-5 text-gray-600">
          <Link href={"/"} className="flex gap-2 items-center ">
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
          <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
            <input
              type="text"
              placeholder="search..."
              className="bg-transparent outline-none"
            />
          </div>
        </div>
      </div>

      {/* right */}
      <div className=" w-[20%] flex gap-4 lg:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-surface opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image
                width={20}
                height={20}
                src={"/icons8-man-50.png"}
                alt="people"
              ></Image>
            </div>
            <div className="cursor-pointer">
              <Image
                width={20}
                height={20}
                src={"/icons8-messages-50.png"}
                alt="messages"
              ></Image>
            </div>
            <div className="cursor-pointer">
              <Image
                width={20}
                height={20}
                src={"/icons8-notifications-50.png"}
                alt="notifications"
              ></Image>
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="cursor-pointer flex gap-2 text-sm">
              <Image
                src={"/icons8-login-50.png"}
                alt="login"
                width={20}
                height={20}
              ></Image>
              <Link href={"/sign-in"}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
