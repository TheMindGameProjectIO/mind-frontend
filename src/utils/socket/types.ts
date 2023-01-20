import { Socket } from "socket.io-client";
import { TPlayerResponseData } from "../../types";

export interface IGameSocketData {
  playedCard: string;
  isShootingStar: boolean;
  isSmallest: boolean;
  game: {
    _id: string;
    cards: string[];
    hasShootingStar: boolean;
    currentLevel: number;
    players: TPlayerResponseData[];
  };
  cards: string[];
}

export interface IGameLobbySocketData {
  name: string;
  roomId: string;
  maxUserCount: number;
  authorId: string;
  invitationLink: string;
  users: TPlayerResponseData[];
}

export interface ServerToClientEvents {
  "auth:verified:email": () => void;
  "auth:verified:password:reset": ({ token }: { token: string }) => void;
  ping: () => void;
  pong: () => void;
  "game:self:joined": (gameLobby: IGameLobbySocketData) => void;
  "game:created": () => void;
  message: (message: string) => void;
  response: (event: keyof ClientToServerEvents, response: { message: string; status: "success" | "fail" }) => void;
  "game:player:joined": (gameLobby: IGameLobbySocketData) => void;
  "game:player:left": () => void;
  "game:self:left": () => void;
  "game:started": () => void;
  "game:player:played": (game: IGameSocketData) => void;
  "game:self:played": (game: IGameSocketData) => void;
  "game:changed": (game: IGameSocketData) => void;
}

export interface ClientToServerEvents {
  ping: () => void;
  pong: () => void;
  "game:start": () => void;
  connection: () => void;
  "game:player:join": () => void;
  "game:player:play": (card: string) => void;
  "game:lobby:player:kick": (userId: string) => void;
}

export type ISocket = Socket<ServerToClientEvents, ClientToServerEvents>;
