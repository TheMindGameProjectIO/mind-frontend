import Button from "../components/ui/Button";
import { lobbyPagesButton } from "../helpers";
import Regular_Rabbit from "../assets/img/regular-rabbit.png";
import { Rabbit } from "../assets/svg";
import { FC, useEffect, useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { LobbiesTitleContext } from "../contexts/LobbiesTitleProvider";
import { publicRoutes } from "../routes";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/slices/userSlice";
import useLoading from "../hooks/useLoading";
import useLobby from "../hooks/useLobby";
import PageLoader from "../components/PageLoader";
import socket from "../utils/socket/socket";

type TLobbyPageParams = {
  id: string;
};

const LobbyPage = () => {
  const { id } = useParams<TLobbyPageParams>();
  if (!id || !isNaN(Number(id))) return <Navigate to={publicRoutes.error} />;

  return <LobbyPageContent id={id} />;
};

interface ILobbyPageContentProps {
  id: string;
}

const LobbyPageContent: FC<ILobbyPageContentProps> = ({ id }) => {
  const { lobby, players, isLoading, kickPlayer } = useLobby(id);
  const { changeTitle } = useContext(LobbiesTitleContext);
  const { id: currentUserId } = useAppSelector(selectUser);
  const isAuthor = currentUserId === lobby.authorId;
  const navigate = useNavigate();

  const [startGame, startingLoading] = useLoading({
    callback: async () => {
      socket.connection.emit("game:start");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    changeTitle("Lobby");

    return () => {
      changeTitle("Public lobbies");
    };
  }, []);

  if (isLoading) return <PageLoader />;

  return (
    <div className="center-content flex-col ">
      <div className="flex flex-col md:flex-row font-play gap-6">
        <div>
          <h2 className="text-center text-main-light mb-4 font-normal"> Players </h2>
          <div className="bg-lighter-blue rounded-2xl p-3 flex items-center flex-col gap-y-3 h-[200px] overflow-scroll overflow-x-hidden">
            {players.map((player) => (
              <PlayerInLobby
                canBeKicked={false}
                onKick={(id: string) => {
                  kickPlayer(id);
                }}
                key={player.id}
                player={player}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-row md:relative md:top-5 border-2 rounded-2xl border-cr-gray place-self-center text-main-light p-2 max-h-36">
          <div className="mx-2">
            <img
              src={Rabbit}
              alt="Light rabbit icon"
              className="order-last md:order-first self-center w-full max-w-max"
            />
          </div>

          <div className="grid mx-4 text-center content-center">
            <p className="font-bold"> {lobby.name} </p>
            <p>
              {players.length} / {lobby.maxPlayersCount}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between px-6 gap-6 mt-3">
        <Button
          onClick={() => {
            navigate(-1);
          }}
          className={lobbyPagesButton}
        >
          Back
        </Button>

        {isAuthor ? (
          <Button
            disabled={startingLoading}
            className={lobbyPagesButton}
            type="submit"
            onClick={async () => await startGame()}
          >
            Start
          </Button>
        ) : null}
      </div>
    </div>
  );
};

interface IPlayerInLobbyProps {
  player: { nickname: string; id: string };
  onKick: (id: string) => void;
  canBeKicked?: boolean;
}

const PlayerInLobby: FC<IPlayerInLobbyProps> = ({ player, onKick, canBeKicked = false }) => {
  return (
    <div className="flex flex-row w-screen max-w-[250px] bg-u-list-gray rounded-2xl p-2">
      <img
        src={Regular_Rabbit}
        alt="Regular rabbit icon"
        className="order-last md:order-first self-center w-full max-w-max"
      />
      <p className="text-main-blue place-self-center mx-4"> {player.nickname} </p>
      {canBeKicked ? (
        <button
          onClick={() => onKick(player.id)}
          className="bg-main-blue text-cr-gray rounded-xl text-sm px-2 w-screen max-w-[60px] py-0 ml-auto"
        >
          Kick
        </button>
      ) : null}
    </div>
  );
};

export default LobbyPage;
