import Image from "next/image";
import delimiter_icon from "../../assets/icons/delimiter.svg";
import person_icon from "../../assets/icons/person.svg";
import puzzle_icon from "../../assets/icons/puzzle.svg";

interface CardItemProps {
  title: string;
  peopleCount: string;
  level: string;
  previewImg: string;
}

export default function CardItem({
  title,
  peopleCount,
  level,
  previewImg,
}: CardItemProps) {
  return (
    <div className="relative flex flex-col justify-end items-end w-[344px] h-[233px] pr-[30px] pb-[20px] overflow-hidden shadow-lg rounded cursor-pointer">
      <div className="absolute inset-0">
        <Image
          className="rounded w-[auto]"
          src={`/${previewImg}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Quest"
          priority={true}
        />
      </div>
      <div className="relative flex flex-col justify-end items-end gap-[15px]">
        <h2 className="text-[#FFF] text-[24px] not-italic font-bold leading-7">
          {title}
        </h2>
        <div className="flex gap-[14px]">
          <div className="flex gap-[8px]">
            <Image src={person_icon} alt="person icon"/>
            <span className="text-[#E6E6E6] text-[13px] not-italic font-medium leading-5">
              {peopleCount.toString().replace(/,/, "-")} осіб
            </span>
          </div>
          <Image src={delimiter_icon} alt="delimiter icon" />
          <div className="flex gap-[8px]">
            <Image src={puzzle_icon} alt="puzzle icon"/>
            <span className="text-[#E6E6E6] text-[13px] not-italic font-medium leading-5">
              {level}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
