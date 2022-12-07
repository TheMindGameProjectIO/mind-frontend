import { useState, FC } from "react";
import Card from "./Card";

interface IClientCardsProps {
    className?: string;
}

const ClientCards: FC<IClientCardsProps> = ({ className }) => {
    const [cards, setCards] = useState<number[]>([1, 2, 3, 4]);

    return (
        <div className={`flex gap-6 ${className}`}>
            {cards.map((card, index) => <Card onPlay={(value) => setCards(cards.filter(card => card != value))} toPlay={true} value={card} key={index} />)}
        </div>
    );
}

export default ClientCards;