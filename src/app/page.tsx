"use client"
import NavGames from "@/Components/NavGames/NavGames";
import { useEffect, useState } from "react";
import CardsBlock from "@/Components/CardsBlock/CardsBlock";
import { navGamesItems } from "@/helper/constants/constants";
import Title from "@/Components/Title/Title";
import { getServerData } from "@/helper/getServerData/getServerData";

interface Card {
  type: string;
}

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  useEffect(() => {
    
    const fetchData = async () => {
      const data = await getServerData();
      setCards(data)
    };

    fetchData();
  }, []);

  return (
    <div className="pl-[135px] pt-[48px]">
      <Title
        text={"Ігри у Львові"}
        title={"В яку гру зіграємо?"}
        blockStyle={"mb-[50px]"}
      />
      <NavGames onSelectGenre={setSelectedGenre} menu={navGamesItems} />
      <CardsBlock
        cards={selectedGenre ? cards.filter((card) => card.type === selectedGenre) : cards}
        cardsBlockStyle={'mt-[63px] mb-[63px]'}
      />
    </div>
  );
}

export default Home;