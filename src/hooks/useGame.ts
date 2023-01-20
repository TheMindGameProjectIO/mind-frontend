import { useEffect, useState } from "react";
import { GAME_TOKEN_KEY } from "../api";
import { emptyGameFactory, gameFactory, TGame } from "../types";
import socket from "../utils/socket/socket";
import { IGameSocketData } from "../utils/socket/types";

const useGame = () => {
  const [game, setGame] = useState<TGame>(emptyGameFactory());
  const [mistake, setMistake] = useState<boolean>(false);
  const [hasWon, setHasWon] = useState<boolean>(false);

  useEffect(() => {
    const gameToken = localStorage.getItem(GAME_TOKEN_KEY);
    if (gameToken) {
      socket.token = gameToken;
    }

    return () => {
      socket.token = "";
    };
  }, []);

  useEffect(() => {
    const listener = (game: IGameSocketData) => {
      const data = gameFactory(game);

      if (data.hasWon) {
        setHasWon(true);
      }

      setGame(data);
    };

    socket.connection.on("game:changed", listener);

    socket.connection.on("game:started", listener);

    return () => {
      socket.connection.off("game:changed", listener);
      socket.connection.off("game:started", listener);
    };
  }, []);

  useEffect(() => {
    if (game.totalMistakes !== 0) {
      setMistake(true);
    }
  }, [game.mistakesLeft]);

  return { game, mistake, setMistake, hasWon, setHasWon };
};

export default useGame;
