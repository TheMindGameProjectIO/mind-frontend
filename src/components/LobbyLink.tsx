import { Rabbit } from "../assets/svg";
import { FC } from "react";
import { Lobby } from "../types";
import { useContext } from "react";
import { LobbiesContext } from "../context/LobbiesProvider";

interface ILobbyLinkProps {
  lobby: Lobby;
  selected: boolean;
}

const LobbyLink: FC<ILobbyLinkProps> = ({ lobby, selected }) => {
  const { name, currentPlayers, maxPlayers, id } = lobby;
  const { selectLobby } = useContext(LobbiesContext);

  return (
    <div
      onClick={() => selectLobby(id)}
      className={`cursor-pointer flex items-center ${
        selected ? "bg-dark-blue-300" : "bg-transparent border-2 border-cr-gray"
      } rounded-[20px] px-3 py-1`}
    >
      <img src={Rabbit} alt="Rabbit icon" />
      <div className="flex items-center flex-col">
        <h3 className="text-lg">{name}</h3>
        <p className="text-cr-gray">
          {currentPlayers}/{maxPlayers} Players
        </p>
      </div>
    </div>
  );
};

export default LobbyLink;
