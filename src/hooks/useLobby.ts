import { useEffect, useState } from "react";
import socket from "../utils/socket/socket";
import { LobbiesController } from "../api";
import useLoading from "./useLoading";
import { GAME_TOKEN_KEY } from "../api";
import { emptyLobbyFactory, lobbyFactory, TLobby, TPlayer } from "../types";
import { useNavigate } from "react-router-dom";
import { privateRoutes } from "../routes";

const useLobby = (id: string) => {
  const [lobby, setLobby] = useState<TLobby>(emptyLobbyFactory());
  const [players, setPlayers] = useState<TPlayer[]>([]);
  const navigate = useNavigate();

  const [joinLobby, joinLoading] = useLoading({
    callback: async () => {
      const gameToken = await LobbiesController.join(id);
      if (gameToken) {
        socket.token = gameToken;
        localStorage.setItem(GAME_TOKEN_KEY, gameToken);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    joinLobby();

    return () => {
      socket.token = "";
    };
  }, []);

  useEffect(() => {
    socket.connection.on("game:lobby:changed", (lobbyData) => {
      const lobby = lobbyFactory(lobbyData);

      setLobby(lobby);
      setPlayers(lobby.players);
    });

    socket.connection.on("game:started", () => {
      navigate(privateRoutes.game(id));
    });

    return () => {
      socket.connection.removeAllListeners("game:lobby:changed");
    };
  }, []);

  const isLoading = joinLoading || players.length === 0;

  const kickPlayer = (id: string) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  return { isLoading, lobby, players, kickPlayer };
};

export default useLobby;
