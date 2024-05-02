import Link from "next/link";
import { MainMenuProps } from "@/interfaces/MainMenuProps";

export default function NavGames({ menu, onSelectGenre }: MainMenuProps) {
  
  return (
    <ul className="w-[712px] h-[36px] shrink-0">
      {menu.map((el, index) => (
        <Link
          className={`bg-gray-300 bg-opacity-10 border border-gray-700 bg-navGamesBackground text-[#E6E6E6] font-bold text-[14px] leading-5 pt-[15px] pb-[15px] pl-[25px] pr-[25px] ${index === 0 ? 'rounded-l-2xl' : ''} ${index === menu.length -1 ? 'rounded-r-2xl' : ''} hover:bg-[#FEC432] hover:text-[#514321]`}
          key={el.name}
          href={el.href}
          onClick={() => onSelectGenre(el.engName)}
        >
          {el.name}
        </Link>
      ))}
    </ul>
  );
}
