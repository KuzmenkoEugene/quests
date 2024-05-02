import { Key } from "react";
import CardItem from "../CardItem/CardItem";

interface cardsBlockStyleProps {
    cardsBlockStyle?: String
    cards: any
}

export default function CardsBlock({ cardsBlockStyle, cards }: cardsBlockStyleProps) {
  return (
    <div
      className={`grid grid-cols-3 gap-[21px] w-[1080px] h-[496px] shrink-0 ${cardsBlockStyle} overflow-x-auto`}
    >
        {
            cards ? cards.map((el: { title: string; peopleCount: string; level: string; previewImg: string}) => (
                <CardItem key={el.title} title={el.title} peopleCount={el.peopleCount} level={el.level} previewImg={el.previewImg}/>
            )) : null
        }
    </div>
  );
}
