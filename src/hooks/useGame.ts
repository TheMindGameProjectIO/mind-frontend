import { useEffect, useState, useRef } from "react";
import { GAME_TOKEN_KEY } from "../api";
import { emptyGameFactory, gameFactory, TGame, TGameResponseData } from "../types";
import socket from "../utils/socket/socket";
import { IGameSocketData } from "../utils/socket/types";
import { playSoundEffect } from "../helpers";

const useGame = () => {
  const mistakeRef = useRef(null);
  const dropRef = useRef(null);
  const successRef = useRef(null);
  const bgRef = useRef(null);
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
      console.log({ game });
      const data = gameFactory(game as unknown as TGameResponseData);
      console.log({ data });

      if (data.hasWon) {
        setHasWon(true);
        playSoundEffect(successRef);
      }

      setGame(data);
    };

    socket.connection.on("game:changed", listener);

    return () => {
      socket.connection.off("game:changed", listener);
    };
  }, []);

  useEffect(() => {
    if (game.totalMistakes !== 0) {
      setMistake(true);
      playSoundEffect(mistakeRef);
    }
  }, [game.mistakesLeft]);

  useEffect(() => {
    if (game.played) {
      playSoundEffect(dropRef);
    }
  }, [game.played]);

  return { game, mistake, setMistake, hasWon, setHasWon, mistakeRef, dropRef, successRef, bgRef };
};

export default useGame;
