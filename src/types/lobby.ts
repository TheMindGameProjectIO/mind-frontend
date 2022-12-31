type TLobbyResponseData = {
  id: string;
  name: string;
  authorId: string;
  maxUserCount: number;
  invitationLink: string;
};

export type Lobby = {
  id: string;
  name: string;
  authorId: string;
  maxPlayersCount: number;
  invitationLink: string;
};

export const lobbyFactory = (data: TLobbyResponseData) => {
  return {
    id: data.id,
    name: data.name,
    authorId: data.authorId,
    maxPlayersCount: data.maxUserCount,
    invitationLink: data.invitationLink,
  } as Lobby;
};
