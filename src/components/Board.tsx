import { FC, useContext } from 'react';
import { GameContext } from '../contexts/GameProvider';
import Card from './Card';

interface IBoardProps {

}

const Board: FC<IBoardProps> = () => {
    const { cards } = useContext(GameContext);

    return (
        <div className='bg-red-100'>
            {<Card value={cards[cards.length - 1]} />}
        </div>
    );
}

export default Board;