import { useContext } from "react";
import LobbyLink from "../components/LobbyLink";
import LobbiesProvider, { LobbiesContext } from "../assets/context/LobbiesProvider";
import { Lobby } from "../types";

const LobbiesPage = () => {
  return (
    <LobbiesProvider>
      <LobbiesBoard />
    </LobbiesProvider>
  );
};

const LobbiesBoard = () => {
  const { lobbies, selectedLobbyId } = useContext(LobbiesContext);

  return (
    <div className="bg-lobby-board p-6 grid grid-cols-2 gap-3 max-h-[300px] overflow-scroll overflow-x-hidden curstom-scrollbar">
      {lobbies.length ? (
        lobbies.map((lobby: Lobby) => (
          <LobbyLink key={lobby.id} lobby={lobby} selected={selectedLobbyId === lobby.id} />
        ))
      ) : (
        <h1> No lobbies available </h1>
      )}
    </div>
  );
};

export default LobbiesPage;
