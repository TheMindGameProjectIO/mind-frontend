import { useContext, useEffect, useState } from "react";
import { GAME_TOKEN_KEY } from "../api";
import { QueryContext, TQueryContext } from "../components/QueryWrapper";
import { gameFactory, TGame } from "../types";
import socket from "../utils/socket/socket";
import { IGameSocketData } from "../utils/socket/types";

const useGame = () => {
  const { data } = useContext<TQueryContext<TGame>>(QueryContext);
  const [game, setGame] = useState<TGame>(data);

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
      setGame(data);
    };

    socket.connection.on("game:changed", listener);

    return () => {
      socket.connection.off("game:changed", listener);
    };
  }, []);

  return { game };
};

export default useGame;
