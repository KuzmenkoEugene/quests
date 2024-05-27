"use client";
import Title from "@/Components/Title/Title";
import Button from "@/Components/Button/Button";
import { QuestId } from "@/interfaces/QuestId";
import { Card } from "@/interfaces/Card";
import { getServerDataItem } from "@/helper/getServerDataItem/getServerDataItem";
import { useEffect, useState } from "react";
import Image from "next/image";

import clock_logo from "../../../assets/icons/yellow_clock.svg";
import delimiter_logo from "../../../assets/icons/yellow_delimiter.svg";
import person_logo from "../../../assets/icons/yellow_person.svg";
import pazzle_logo from "../../../assets/icons/yellow_puzzle.svg";

const QuestPage: React.FC<QuestId> = ({ params }) => {
  const [cards, setCards] = useState<Card | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServerDataItem(params?.id);
      setCards(data);
    };

    fetchData();
  }, [params.id]);

  return (
    <>
      {cards ? (
        <Image src={`/${cards.coverImg}`} alt="Background" layout="fill" />
      ) : null}
      <div className="block w-[1366px] pt-[49px] pb-[85px] pl-[558px] relative">
        {cards ? (
          <div className="w-[579px] mb-[43px]">
            <Title
              text={cards.type}
              title={cards.title}
              titleStyle="text-[92px] font-extrabold "
            />
          </div>
        ) : null}
        {cards ? (
          <div className="pl-[43px]">
            <div className="flex gap-[28px] mb-[26px]">
              <div className="flex gap-[5px] items-center">
                <Image src={clock_logo} alt="clock logo" />
                <span className="text-[#FEC432] text-[14px]">
                  {`${cards.duration} хв`}
                </span>
              </div>
              <Image src={delimiter_logo} alt="delimiter logo" />
              <div className="flex items-center gap-[5px]">
                <Image className="w-[16px] h-[13px]" src={person_logo} alt="person logo" />
                <span className="text-[#FEC432] text-[14px]">
                  {`${cards.peopleCount[0]} - ${cards.peopleCount[1]} осіб`}
                </span>
              </div>
              <Image src={delimiter_logo} alt="delimiter logo" />
              <div className="flex items-center gap-[5px]">
                <Image className="w-[16px] h-[13px]" src={pazzle_logo} alt="pazzle logo" />
                <span className="text-[#FEC432] text-[14px]">
                  {cards.level}
                </span>
              </div>
            </div>
            <div className="w-[533px] mb-[40px]">
              <p className="text-[15px] text-[#E6E6E6] font-medium leading-6">
                {cards.description}
              </p>
            </div>
            <Button id={params.id} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default QuestPage;
