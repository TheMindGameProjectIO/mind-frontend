import { createContext, useState, FC, ReactNode } from "react";
import { Lobby } from "../../types";

// TODO: Remove this when we have a real API
const serverLobbies: Lobby[] = [
  {
    id: "1",
    name: "Lobby name 1",
    currentPlayers: 2,
    maxPlayers: 4,
  },
  {
    id: "2",
    name: "Lobby name 2",
    currentPlayers: 2,
    maxPlayers: 4,
  },
  {
    id: "3",
    name: "Lobby name 3",
    currentPlayers: 2,
    maxPlayers: 4,
  },
  {
    id: "4",
    name: "Lobby name 4",
    currentPlayers: 2,
    maxPlayers: 4,
  },
  {
    id: "5",
    name: "Lobby name 5",
    currentPlayers: 2,
    maxPlayers: 4,
  },
  {
    id: "6",
    name: "Lobby name 6",
    currentPlayers: 2,
    maxPlayers: 4,
  },
  {
    id: "7",
    name: "Lobby name 7",
    currentPlayers: 2,
    maxPlayers: 4,
  },
];

const INITIAL_VALUE = { lobbies: [], selectedLobbyId: "", selectLobby: () => {} };

export const LobbiesContext = createContext<{
  lobbies: Lobby[];
  selectedLobbyId: string;
  selectLobby: (id: string) => void;
}>(INITIAL_VALUE);

interface ILobbiesProviderProps {
  children: ReactNode;
}

const LobbiesProvider: FC<ILobbiesProviderProps> = ({ children }) => {
  const [selectedLobbyId, setSelectedLobbyId] = useState<string>("");

  const selectLobby = (id: string) => {
    setSelectedLobbyId(id);
  };

  return (
    <LobbiesContext.Provider
      value={{
        lobbies: serverLobbies,
        selectedLobbyId,
        selectLobby,
      }}
    >
      {children}
    </LobbiesContext.Provider>
  );
};

export default LobbiesProvider;
