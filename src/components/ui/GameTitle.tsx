interface IGameTitle
{
    classname?: string
}

const GameTitle = ({ classname }: IGameTitle) => {
    return (
        <h1
            className = {classname === undefined ? 'font-audiowide text-main-light text-[2.5rem] md:text-[3.7rem] md:max-w-[300px] mb-8' : classname}
            style = {{
                mixBlendMode: 'normal',
                textShadow: '0px 5px 20px rgba(189, 170, 147, 0.5)'
            }}
        >
            The Mind Game
        </h1>
    );
}

export default GameTitle;