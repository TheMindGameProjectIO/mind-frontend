import { Navigate, useParams, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Board from "../components/Board";
import GameProvider from "../contexts/GameProvider";
import ClientsCard from "../components/ClientCards";
import { FC, ReactNode, useState } from "react";
import { Rabbit } from "../assets/svg";
import PlayingCard from "../components/card/PlayingCard";
import { FiSlash, FiPlay, FiAward } from "react-icons/fi";
import ShootingStar from "../components/card/ShootingStar";
import Box from "../components/ui/Box";
import { publicRoutes } from "../routes";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/slices/userSlice";
import useGame from "../hooks/useGame";
import WarningModal from "../components/ui/WarningModal";
import Modal from "../components/Modal";
import Rules from "../components/Rules";
import Button from "../components/ui/Button";
import { Drop, Mistake, Success } from "../assets/mp3";
import SoundEffectPlayer from "../components/SoundEffectPlayer";

interface ILobbiesLayoutProps {
  children: ReactNode;
}

type TGamePageParams = {
  id: string;
};

const GamePage = () => {
  const { id } = useParams<TGamePageParams>();
  if (!id || !isNaN(Number(id))) return <Navigate to={publicRoutes.error} />;

  return <GamePageContent />;
};

const GamePageContent = () => {
  const { id: currentUserId } = useAppSelector(selectUser);
  const navigate = useNavigate();
  const [rulesModal, setRulesModal] = useState<boolean>(false);
  const [leaveModal, setLeaveModal] = useState<boolean>(false);
  const { game, mistake, setMistake, hasWon, setHasWon, mistakeRef, dropRef, successRef } = useGame();

  return (
    <GameProvider>
      <>
        <Layout currentLink={2}>
          <div className="center-content bg-about-game-background h-screen bg-contain bg-no-repeat bg-center">
            <div className="w-full max-w-[1200px]">
              <GameLayout>
                <div className="flex justify-between md:justify-around">
                  {game.players
                    .filter((player) => player.id !== currentUserId)
                    .map((player) => (
                      <PlayerInGame
                        isOnline={player.isOnline}
                        key={player.id}
                        name={player.nickname}
                        cardsAmount={player.cardsAmount}
                      />
                    ))}
                </div>
                <div className="center-content my-8 relative">
                  <Box light={true} className="absolute text-main-blue -bottom-20 left-0 xs:bottom-16 font-bold">
                    Level <br />
                    {game.currentLevel} : 12
                  </Box>
                  <Board cards={game.cardsOnBoard} />
                  <div className="absolute text-main-blue font-bold right-0 center-content -bottom-24 xs:bottom-14 flex-col gap-y-2">
                    <Box onClick={() => setRulesModal(true)} light={true} className="px-5 cursor-pointer">
                      ?
                    </Box>
                    <Box onClick={() => setLeaveModal(true)} light={true} className="px-5 cursor-pointer">
                      X
                    </Box>
                  </div>
                </div>
                <div className="center-content relative">
                  <div className="flex flex-col sm:flex-row items-center">
                    {game.hasShootingStar ? (
                      <ShootingStar toPlay={true} className="absolute mb-3 sm:right-8 sm:mb-0" size="small" />
                    ) : null}
                    <ClientsCard cards={game.clientCards} />
                  </div>
                </div>
              </GameLayout>
            </div>
          </div>
        </Layout>
        <WarningModal
          visible={mistake}
          onClose={() => {
            setMistake(false);
            if (game.hasLost) navigate(publicRoutes.index);
          }}
          title={
            !game.hasLost
              ? `Someone made a mistake! Be carefull you are left only with ${game.mistakesLeft} mistake${
                  game.mistakesLeft !== 1 ? "s" : ""
                }!`
              : "You have lost them game! Do not be upset, try again! :)"
          }
        />
        <Modal
          visible={hasWon}
          onClose={() => {
            setHasWon(false);
            navigate(publicRoutes.index);
          }}
        >
          <div className="bg-main-blue p-6 rounded-xl">
            <div className="center-content">
              <FiAward className="h-16 w-16" />
            </div>
            <div>
              <h1 className="text-2xl font-bold my-3 max-w-[350px]">Congratulations, you have won the game! {":)"} </h1>
            </div>
          </div>
        </Modal>
        <Rules visible={rulesModal} onClose={() => setRulesModal(false)} />
        <WarningModal visible={leaveModal} onClose={() => setLeaveModal(false)} title="Are you sure you want to leave?">
          <Button
            onClick={() => {
              setLeaveModal(false);
              navigate(publicRoutes.index);
            }}
          >
            Yes
          </Button>
          <Button onClick={() => setLeaveModal(false)}> No </Button>
        </WarningModal>
        <SoundEffectPlayer src={Drop} innerRef={dropRef} />
        <SoundEffectPlayer src={Mistake} innerRef={mistakeRef} />
        <SoundEffectPlayer src={Success} innerRef={successRef} />
      </>
    </GameProvider>
  );
};

const GameLayout: FC<ILobbiesLayoutProps> = ({ children }) => {
  return (
    <div>
      <div
        className="bg-main-blue rounded-[20px] px-4 sm:px-8 md:px-12 py-8"
        style={{ boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.25)" }}
      >
        {children}
      </div>
    </div>
  );
};

interface IPlayerInGameProps {
  name: string;
  cardsAmount?: number;
  isOnline?: boolean;
}

const PlayerInGame: FC<IPlayerInGameProps> = ({ name, cardsAmount = 0, isOnline = false }) => {
  return (
    <div className="relative flex items-center gap-3">
      <div className={`center-content flex-col ${!isOnline ? "opacity-30" : ""}`}>
        <img src={Rabbit} alt="rabbit" />
        <p className="text-main-light text-[1.5rem]">{name}</p>
      </div>
      <div className="absolute -top-3 left-6 md:hidden">
        {cardsAmount === 0 ? <FiSlash color="red" /> : <FiPlay color="green" />}
      </div>
      <div className="hidden md:flex items-center gap-2">
        <span className="text-lg font-bold text-white"> {cardsAmount} x </span>
        <PlayingCard size="small" toPlay={false} hide={true} />
      </div>
    </div>
  );
};

export default GamePage;
