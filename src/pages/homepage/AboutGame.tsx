import BgImage from "../../assets/img/mind-game-book.png"

const AboutGame = () =>
{
    const ruleClass: string = "m-5"

    return (
    <div className = "bg-cover bg-about-game-background flex flex-row pl-24 font-play">
        {/* //?  FIXME: There is a small gap between this page and "AuthOpportunity" page */}
        <img src = { BgImage } alt = "An image of a book" />
        <div className = "flex flex-col">
            {/* // TODO: The text align must be: "center" */}
            <h1 className = 'text-main-blue text-[4rem] font-bold m-0'> About the game </h1>

            {/* // TODO: The text align must be: "center" */}
            <p className = {ruleClass}> The deck contains cards numbered 1-100, and during the game you try to <br />
            complete 12, 10 or 8 levels of play with 2, 3 or 4 players. In a level, each <br />
            player receives a hand of cards equal to the number of the level: one card <br />
            in level 1, two cards in level 2, etc.
            </p>

            <p className = {ruleClass}> Collectively you must play these cards into the center of the table on a <br />
            single discard pile in ascending order, but you cannot communicate with <br />
            one another in any way as to which cards you hold. You simply stare into <br />
            one another's eyes, and when you feel the time is right, you play your <br />
            lowest card. If no one holds a card lower than what you played, great, the <br />
            game continues! If someone did, all players discard face up all cards lower <br /> 
            than what you played, and you lose one life.
            </p>

            <p className = {ruleClass}> You start the game with a number of lives equal to the number of players. <br />
            Lose all your lives, and you lose the game. You start with one shuriken{/* FIXME: star? */} as <br />
            well, and if everyone wants to use a shuriken,{/* FIXME: */} each player discards their <br />
            lowest card face up, giving everyone information and getting you closer to <br />
            completing the level. As you complete levels, you might receive a reward <br />
            of a shuriken{/* FIXME: */} or an extra life. Complete all levels, and you win!

            </p>
        </div>
    </div>
  )
}

export default AboutGame;