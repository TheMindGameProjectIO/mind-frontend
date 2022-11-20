import BgImage from "../../assets/img/mind-game-book.png"

const AboutGame = () =>
{
    const ruleClass: string = "mb-5 text-center"

    return (
    <div className = "bg-cover bg-about-game-background flex flex-row pl-28 pr-36 font-play">
        {/* //?  FIXME: There is a small gap between this page and "AuthOpportunity" page */}
        {/* //! TODO: Make this part responsive for mobile! */}
        
        <img src = { BgImage } alt = "An image of a book" />

        <div className = "flex flex-col">
            <h1 className = 'text-main-blue text-[4rem] font-bold ml-14 mt-10'> About the game </h1>

            <p className = {ruleClass}> The deck contains cards numbered 1-100, and during the game you try to
            complete 12, 10 or 8 levels of play with 2, 3 or 4 players. In a level, each
            player receives a hand of cards equal to the number of the level: one card
            in level 1, two cards in level 2, etc.
            </p>

            <p className = {ruleClass}> Collectively you must play these cards into the center of the table on a
            single discard pile in ascending order, but you cannot communicate with
            one another in any way as to which cards you hold. You simply stare into
            one another's eyes, and when you feel the time is right, you play your
            lowest card. If no one holds a card lower than what you played, great, the
            game continues! If someone did, all players discard face up all cards lower 
            than what you played, and you lose one life.
            </p>

            <p className = {ruleClass}> You start the game with a number of lives equal to the number of players.
            Lose all your lives, and you lose the game. You start with one throwing star as
            well, and if everyone wants to use a throwing star, each player discards their
            lowest card face up, giving everyone information and getting you closer to
            completing the level. As you complete levels, you might receive a reward
            of a throwing star or an extra life. Complete all levels, and you win!
            </p>
        </div>
    </div>
  )
}

export default AboutGame;