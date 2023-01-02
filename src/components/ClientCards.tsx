import { useState, FC, useMemo } from "react";
import PlayingCard from "./card/PlayingCard";
import Box from "./ui/Box";

interface IClientCardsProps {
  className?: string;
}

const CHUNK_SIZE = 3;
const ClientCards: FC<IClientCardsProps> = ({ className }) => {
  const [cards, setCards] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

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
        {chunks.map((chunk: number[]) => {
          return (
            <div className="grid grid-cols-3 relative left-2 xs:left-6 md:left-7">
              {chunk.map((card) => {
                if (count === CHUNK_SIZE) count = 0;

                return (
                  <div
                    className={`relative`}
                    style={{
                      right: count++ !== 0 ? `${count * 24}px` : undefined,
                    }}
                  >
                    <PlayingCard
                      onPlay={(value) => setCards(cards.filter((card) => card != value))}
                      toPlay={true}
                      value={card}
                      key={card}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Box>
  );
};

export default ClientCards;
