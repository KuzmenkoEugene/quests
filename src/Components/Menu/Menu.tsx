import Link from "next/link";

import { MainMenuProps } from "@/interfaces/MainMenuProps";


export default function MainMenu({menu}: MainMenuProps) {
  return (
    <ul className="w-[464px] flex justify-between shrink-0">
      {menu.map((el) => (
        <Link className="text-[#A6A6A6] hover:text-[#FEC432]" key={el.name} href={el.href}>
          {el.name}
        </Link>
      ))}
    </ul>
  );
}
