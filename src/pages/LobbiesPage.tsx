import { useContext } from "react";
import LobbyLink from "../components/LobbyLink";
import LobbiesProvider, { LobbiesContext } from "../context/LobbiesProvider";
import { Lobby } from "../types";
import Button from "../components/ui/Button";
import { lobbyPagesButton } from "../helpers";

const LobbiesPage = () => {
  const { selectedLobbyId } = useContext(LobbiesContext);

  return (
    <LobbiesProvider>
      <div className="flex flex-col items-center">
        <LobbiesBoard />
        <Button className={lobbyPagesButton}> Join </Button>
      </div>
    </LobbiesProvider>
  );
};

const LobbiesBoard = () => {
  const { lobbies, selectedLobbyId } = useContext(LobbiesContext);

  return (
    <div className="bg-lobby-board p-6 flex flex-col item-center sm:grid grid-cols-2 gap-3 max-h-[400px] sm:max-h-[300px] overflow-scroll overflow-x-hidden curstom-scrollbar rounded-[20px]">
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
