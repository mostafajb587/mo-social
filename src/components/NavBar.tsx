import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between h-24">
      {/* left */}
      <div className="font-bold text-xl text-blue-600">
        <Link href={"/"}>MoSocial</Link>
      </div>
      {/* center */}
      <div className="hidden"></div>
      {/* right */}
      <div>
        <MobileMenu></MobileMenu>
      </div>
    </div>
  );
}
