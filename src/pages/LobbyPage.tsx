import Button from "../components/ui/Button";
import { lobbyPagesButton } from "../helpers";
import Regular_Rabbit from "../assets/img/regular-rabbit.png";
import { Rabbit } from "../assets/svg";
import { FC, useState, memo, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { LobbiesTitleContext } from "../contexts/LobbiesTitleProvider";

const serverPlayers = [
  { id: 1, name: "MT" },
  { id: 2, name: "12" },
  { id: 3, name: "TM" },
];

const LobbyPage = () => {
  const [players, setPlayers] = useState(serverPlayers);
  const isAuthor = true;
  const navigate = useNavigate();
  const { changeTitle } = useContext(LobbiesTitleContext);

  useEffect(() => {
    changeTitle("Lobby");

    return () => {
      changeTitle("Public lobbies");
    };
  }, []);

  return (
    <div className="center-content flex-col ">
      <div className="flex flex-col md:flex-row font-play gap-6">
        <div>
          <h2 className="text-center text-main-light mb-4 font-normal"> Players </h2>
          <div className="bg-lighter-blue rounded-2xl p-3 flex items-center flex-col gap-y-3 h-[200px] overflow-scroll overflow-x-hidden">
            {players.map((player) => (
              <PlayerInLobby
                isAuthor={isAuthor}
                onKick={(id: number) => {
                  setPlayers(players.filter((player) => player.id !== id));
                  // TODO: Notify server to kick player
                }}
                key={player.id}
                player={player}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-row md:relative md:top-5 border-2 rounded-2xl border-cr-gray place-self-center text-main-light p-2 max-h-36">
          <div className="mx-2">
            {/* FIXME: Later replace this image with normal icon */}
            <img
              src={Rabbit}
              alt="Light rabbit icon"
              className="order-last md:order-first self-center w-full max-w-max"
            />
          </div>

          <div className="grid mx-4 text-center content-center">
            <p className="font-bold"> Lobby name </p>
            <p> 1 player </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between px-6 gap-6">
        {/* TODO: Button should go back */}
        <Button
          onClick={() => {
            navigate(-1);
            // TODO: Notify server to leave lobby
          }}
          className={lobbyPagesButton}
        >
          Back
        </Button>

        {/* TODO: The button should create a lobby*/}
        {isAuthor ? (
          <Button className={lobbyPagesButton} type="submit">
            Start
          </Button>
        ) : null}
      </div>
    </div>
  );
};

interface IPlayerInLobbyProps {
  player: { name: string; id: number };
  onKick: (id: number) => void;
  isAuthor?: boolean;
}

const PlayerInLobby: FC<IPlayerInLobbyProps> = memo(({ player, onKick, isAuthor = false }) => {
  return (
    <div className="flex flex-row w-screen max-w-[250px] bg-u-list-gray rounded-2xl p-2">
      <img
        src={Regular_Rabbit}
        alt="Regular rabbit icon"
        className="order-last md:order-first self-center w-full max-w-max"
      />
      <p className="text-main-blue place-self-center mx-4"> {player.name} </p>
      {isAuthor ? (
        <button
          onClick={() => onKick(player.id)}
          className="bg-main-blue text-cr-gray rounded-xl text-sm px-2 w-screen max-w-[60px] py-0 ml-auto"
        >
          Kick
        </button>
      ) : null}
    </div>
  );
});

export default LobbyPage;
