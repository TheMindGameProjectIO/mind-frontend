import { FC, useMemo } from "react";
import { TCard } from "../types/card";
import PlayingCard from "./card/PlayingCard";
import Box from "./ui/Box";

interface IClientCardsProps {
  className?: string;
  cards: TCard[];
}

const CHUNK_SIZE = 3;
const ClientCards: FC<IClientCardsProps> = ({ className, cards }) => {
  const chunks = useMemo(() => {
    return cards.reduce((acc: any, value, index) => {
      // consider the chunk size
      const chunkIndex = Math.floor(index / CHUNK_SIZE);

      // if the array doesn't have the chunk yet, create it
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }

      // push the value to the chunk
      acc[chunkIndex].push(value);

      return acc;
    }, []);
  }, [cards]);

  let count = 0;
  return (
    <Box className={`w-full max-w-[400px] ${className}`}>
      <div className="overflow-scroll h-[200px] flex flex-col gap-y-4 items-center">
        {cards.length !== 0 ? (
          <>
            {chunks.map((chunk: TCard[]) => {
              return (
                <div className="grid grid-cols-3 relative left-2 xs:left-6 md:left-7">
                  {chunk.map((card) => {
                    if (count === CHUNK_SIZE) count = 0;

                    return (
                      <div
                        className={`relative`}
                        style={{ right: count++ !== 0 ? `${count * 24}px` : undefined }}
                        key={card}
                      >
                        <PlayingCard toPlay={true} value={card} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </>
        ) : (
          <div className="text-2xl front-bold px-12 relative top-20 center-content">
            <p>No cards here...</p>
          </div>
        )}
      </div>
    </Box>
  );
};

export default ClientCards;
