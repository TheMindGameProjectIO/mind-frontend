import { playerFactory, TPlayer, TPlayerResponseData } from "./player";

type TLobbyResponseData = {
  id: string;
  name: string;
  authorId: string;
  maxUserCount: number;
  invitationLink: string;
  users: TPlayerResponseData[];
};

export type TLobby = {
  id: string;
  name: string;
  authorId: string;
  maxPlayersCount: number;
  invitationLink: string;
  players: TPlayer[];
};

export const lobbyFactory = (data: TLobbyResponseData) => {
  return {
    id: data.id,
    name: data.name,
    authorId: data.authorId,
    maxPlayersCount: data.maxUserCount,
    invitationLink: data.invitationLink,
    players: data.users.map((player) => playerFactory(player)),
  } as TLobby;
};

export const emptyLobbyFactory = () => {
  return {
    id: "",
    name: "",
    authorId: "",
    maxPlayersCount: 0,
    invitationLink: "",
    players: [],
  } as TLobby;
};
