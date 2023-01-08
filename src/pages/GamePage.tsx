import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Board from "../components/Board";
import GameProvider from "../contexts/GameProvider";
import ClientsCard from "../components/ClientCards";
import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { Rabbit } from "../assets/svg";
import PlayingCard from "../components/card/PlayingCard";
import { FiSlash, FiPlay } from "react-icons/fi";
import ShootingStar from "../components/card/ShootingStar";
import Box from "../components/ui/Box";
import QueryWrapper, { TQueryContext } from "../components/QueryWrapper";
import { QueryContext } from "../components/QueryWrapper";
import { GameController, GAME_TOKEN_KEY } from "../api";
import { publicRoutes } from "../routes";
import { TGame } from "../types";
import socket from "../utils/socket/socket";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/slices/userSlice";

interface ILobbiesLayoutProps {
  children: ReactNode;
}

type TGamePageParams = {
  id: string;
};

const GamePage = () => {
  const { id } = useParams<TGamePageParams>();
  if (!id || !isNaN(Number(id))) return <Navigate to={publicRoutes.error} />;

  return (
    <QueryWrapper queryFn={() => GameController.getOne(id)} queryKey={["boardCards", id]}>
      <GamePageContent />
    </QueryWrapper>
  );
};

const GamePageContent = () => {
  const { data: game } = useContext<TQueryContext<TGame>>(QueryContext);
  const { id: currentUserId } = useAppSelector(selectUser);

  console.log(game);

  useEffect(() => {
    const gameToken = localStorage.getItem(GAME_TOKEN_KEY);
    if (gameToken) {
      socket.token = gameToken;
    }

    return () => {
      socket.token = "";
    };
  }, []);

  return (
    <GameProvider serverCards={game.cardsOnBoard}>
      <Layout currentLink={2}>
        <div className="center-content bg-about-game-background bg-cover bg-no-repeat bg-center">
          <div className="mt-24 w-full max-w-[1200px]">
            <GameLayout>
              <div className="flex justify-between md:justify-around">
                {game.players
                  .filter((player) => player.id !== currentUserId)
                  .map((player) => (
                    <PlayerInGame key={player.id} name={player.nickname} cardsAmount={player.cardsAmount} />
                  ))}
              </div>
              <div className="center-content my-8 relative">
                <Box light={true} className="absolute text-main-blue -bottom-20 left-0 xs:bottom-16 font-bold">
                  Level <br />
                  {game.currentLevel} : 12
                </Box>
                <Board />
                <div className="absolute text-main-blue font-bold right-0 center-content -bottom-24 xs:bottom-14 flex-col gap-y-2">
                  <Box light={true} className="px-5 cursor-pointer">
                    ?
                  </Box>
                  <Box light={true} className="px-5 cursor-pointer">
                    X
                  </Box>
                </div>
              </div>

              <div className="center-content relative">
                <div className="flex flex-col sm:flex-row items-center">
                  {game.hasShootingStar ? (
                    <ShootingStar toPlay={true} className="absolute mb-3 sm:right-8 sm:mb-0" size="small" />
                  ) : null}
                  <ClientsCard serverCards={game.clientCards} />
                </div>
              </div>
            </GameLayout>
          </div>
        </div>
      </Layout>
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
}

const PlayerInGame: FC<IPlayerInGameProps> = ({ name, cardsAmount = 0 }) => {
  return (
    <div className="relative flex items-center gap-3">
      <div className="center-content flex-col">
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
