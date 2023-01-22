import { Socket } from "socket.io-client";

export interface IGameSocketData {
  player: {
    _id: string;
    nickname: string;
    cards: string[];
  };
  shootingStar: {
    voted: number;
    total: number;
    hasVoted: boolean;
    isVoting: boolean;
    nickname: string;
  };
  played?: {
    card: string;
    player: {
      _id: string;
      nickname: string;
    };
  };
  game: {
    _id: string;
    cards: string[];
    hasWon: boolean;
    hasLost: boolean;
    hasShootingStar: boolean;
    currentLevel: number;
    totalMistakes: number;
    mistakesLeft: number;
    players: {
      _id: string;
      nickname: string;
      cards: number;
      isOnline: boolean;
      reaction: string;
    }[];
  };
}

export interface IGameLobbySocketData {
  name: string;
  roomId: string;
  maxUserCount: number;
  authorId: string;
  invitationLink: string;
  users: {
    _id: string;
    nickname: string;
  }[];
}

export interface ServerToClientEvents {
  "game:lost": () => void;
  "game:won": () => void;
  "auth:verified:email": () => void;
  "auth:verified:password:reset": ({ token }: { token: string }) => void;
  ping: () => void;
  pong: () => void;
  "game:created": () => void;
  message: (message: string) => void;
  response: (event: keyof ClientToServerEvents, response: { message: string; status: "success" | "fail" }) => void;
  "game:lobby:changed": (gameLobby: IGameLobbySocketData) => void;
  "game:player:left": () => void;
  "game:self:left": () => void;
  "game:started": () => void;
  "game:changed": (game: IGameSocketData) => void;
  "game:lobby:kicked": () => void;
}

export interface ClientToServerEvents {
  "game:lobby:kick": (userId: string) => void;
  ping: () => void;
  pong: () => void;
  "game:start": () => void;
  connection: () => void;
  "game:player:join": () => void;
  "game:player:play": (card: string) => void;
  "game:lobby:player:kick": (userId: string) => void;
  "game:player:shootingstar": (accept: boolean) => void;
  "game:player:react": (reaction: string) => void;
}

export type ISocket = Socket<ServerToClientEvents, ClientToServerEvents>;
