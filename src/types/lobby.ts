type TLobbyResponseData = { id: string; name: string; maxPlayers: number; currentPlayers: number };

export class Lobby {
  id: string;
  name: string;
  maxPlayers: number;
  currentPlayers: number;

  constructor(data: TLobbyResponseData) {
    this.id = data.id;
    this.name = data.name;
    this.maxPlayers = data.maxPlayers;
    this.currentPlayers = data.currentPlayers;
  }
}
