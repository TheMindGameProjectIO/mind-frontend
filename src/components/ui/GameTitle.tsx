import { FC } from 'react';

interface IGameTitleProps {
    className?: string
}

const GameTitle: FC<IGameTitleProps> = ({ className }) => {
    return (
        <h1
            className={`font-audiowide text-main-light text-[2.5rem] md:text-[3.7rem] md:max-w-[300px] mb-8 ${className}`}
            style={{
                mixBlendMode: 'normal',
                textShadow: '0px 5px 20px rgba(189, 170, 147, 0.5)'
            }}
        >
            The Mind Game
        </h1>
    );
}

export default GameTitle;