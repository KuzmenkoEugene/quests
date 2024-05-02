import Image from "next/image";
import header_logo from "../assets/logo/header.svg";
import {menu} from "@/helper/constants/constants";
import MainMenu from "./Menu/Menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-[1366px] h-[74px] pl-[32px] pt-[16px] pb-[16px] bg-defaultBackground">
      <div className="flex items-center w-[1298px]">
        <Link className="w-42px h-42px mr-[374px]" href={'./'}>
          <Image
            className="w-42px h-42px"
            src={header_logo}
            alt="header logo"
            priority={true}
          />
        </Link>
        <MainMenu menu={menu} />
        <a className="text-[#A6A6A6] text-[14px] not-italic	font-semibold ml-auto" href="tel:+380505559955">
          +38 (050) 555-99-55
        </a>
      </div>
    </header>
  );
}
