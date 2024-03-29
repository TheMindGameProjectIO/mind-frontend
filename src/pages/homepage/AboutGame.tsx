import BgImage from "../../assets/img/mind-game-book.png";

const ruleClass = "mb-5 text-center font-bold text-main-blue text-[0.7rem] md:text-[1rem]";

const AboutGame = () => {
  return (
    <div className="bg-cover bg-center bg-about-game-background flex flex-col md:flex-row font-play center-content">
      {/* //! FIXME: Background image is terrible when decreasing in size! */}
      {/* //! FIXME: Because of rabbits in the background image, some part of the text is not seen! */}

      <img src={BgImage} alt="An image of a book" className="order-last md:order-first self-center w-full max-w-max" />

      <div className="flex flex-col pr-4 max-w-[600px]">
        <h1 className="text-main-blue mb-7 text-[3rem] md:text-[4rem] text-center font-bold md:ml-14 mt-10">
          About the game
        </h1>

        <p className={ruleClass}>
          The deck contains cards numbered 1-100, and during the game you try to complete 12, 10 or 8 levels of play
          with 2, 3 or 4 players. In a level, each player receives a hand of cards equal to the number of the level: one
          card in level 1, two cards in level 2, etc.
        </p>

        <p className={ruleClass}>
          Collectively you must play these cards into the center of the table on a single discard pile in ascending
          order, but you cannot communicate with one another in any way as to which cards you hold. You simply stare
          into one another eyes, and when you feel the time is right, you play your lowest card. If no one holds a card
          lower than what you played, great, the game continues! If someone did, all players discard face up all cards
          lower than what you played, and you lose one life.
        </p>

        <p className={ruleClass}>
          You start the game with a number of lives equal to the number of players. Lose all your lives, and you lose
          the game. You start with one throwing star as well, and if everyone wants to use a throwing star, each player
          discards their lowest card face up, giving everyone information and getting you closer to completing the
          level. As you complete levels, you might receive a reward of a throwing star or an extra life. Complete all
          levels, and you win!
        </p>
      </div>
    </div>
  );
};

export default AboutGame;
