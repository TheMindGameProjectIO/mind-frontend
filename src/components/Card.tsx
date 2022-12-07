
import { FC, useContext } from 'react';
import { GameContext } from '../contexts/GameProvider';

interface ICardProps {
    value: number;
    toPlay?: boolean;
    onPlay?: (value: number) => void;
}

const Card: FC<ICardProps> = ({ value, toPlay = false, onPlay = (value: number) => { } }) => {
    const { playCard } = useContext(GameContext);

    const onClick = () => {
        if (toPlay) {
            playCard(value);
            onPlay(value);
        }
    }

    return (
        <div onClick={onClick} className={`${toPlay ? 'hover:bg-gray-200 cursor-pointer' : ''} border border-gray-200 px-12 py-24`}>
            {value}
        </div>
    );
}

export default Card;