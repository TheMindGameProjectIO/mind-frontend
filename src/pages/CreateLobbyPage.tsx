import Button from "../components/ui/Button";
import { useState, useRef, MouseEvent } from "react";
import { lobbyPagesButton } from "../helpers";
import InputField from "../components/ui/Field/InputField";
import { useEffect, useContext } from "react";
import { LobbiesTitleContext } from "../contexts/LobbiesTitleProvider";
import { Validations } from "../enums";
import useLoading from "../hooks/useLoading";
import InputError from "../components/ui/InputError";
import Loader from "../components/Loader";
import { LobbiesController, TCreateLobbyData } from "../api";
import { isNotEmpty } from "../validators";
import { useNavigate } from "react-router";
import { privateRoutes } from "../routes";

const CreateLobbyPage = () => {
  const { changeTitle } = useContext(LobbiesTitleContext);
  const lobbyNameRef = useRef<any>();
  const playersNumberRef = useRef<any>();
  const [error, setError] = useState<string>("no error");
  const navigate = useNavigate();

  useEffect(() => {
    changeTitle("Create a lobby");

    return () => {
      changeTitle("Public lobbies");
    };
  }, []);

  const onSubmit = async (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lobbyName = lobbyNameRef.current?.value;
    const playersNumber = playersNumberRef.current?.value;

    if (!isNotEmpty(lobbyName)) {
      setError("empty lobby name");
      return;
    }

    if (!isNotEmpty(playersNumber)) {
      setError("empty players number");
      return;
    }

    await createRequest({ name: lobbyName, maxUserCount: parseInt(playersNumber) } as TCreateLobbyData);
  };

  const [createRequest, requestLoading] = useLoading({
    callback: async (data: TCreateLobbyData) => {
      const lobbyId = await LobbiesController.create(data);
      setError("no error");

      navigate(privateRoutes.lobbiesRoutes.lobby() + lobbyId);
    },
    onError: (error) => {
      setError("server error");
    },
  });

  return (
    <div className="center-content flex-col">
      <form onSubmit={onSubmit} className="flex flex-col items-center">
        {error === "server error" ? (
          <InputError> Something went wrong, please try again later on... </InputError>
        ) : null}
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-24 lg:py-4 py-12 px-12 lg:px-4">
          <div>
            <InputField<string> label="Enter a lobby name" placeholder="my lobby" innerRef={lobbyNameRef} />
            {error === "empty lobby name" ? <InputError className="absolute"> Enter a lobby name </InputError> : null}
          </div>
          <div>
            <InputField<number>
              label="Number of players"
              placeholder="2-4"
              transform={(value: string) => {
                const convertedValue = parseInt(value.length > 1 ? value[1] : value);

                if (isNaN(convertedValue) || convertedValue < Validations.MINIMAL_LOBBY_USER_COUNT)
                  return Validations.MINIMAL_LOBBY_USER_COUNT;

                if (convertedValue > Validations.MAXIMAL_LOBBY_USER_COUNT) return Validations.MAXIMAL_LOBBY_USER_COUNT;

                return convertedValue;
              }}
              innerRef={playersNumberRef}
            />
            {error === "empty players number" ? (
              <InputError className="absolute"> Enter a number of players </InputError>
            ) : null}
          </div>
        </div>

        <Button className={lobbyPagesButton} type="submit">
          Create Lobby
        </Button>
        {requestLoading ? <Loader scale="0.5" className="relative top-2" /> : null}
      </form>
    </div>
  );
};

export default CreateLobbyPage;
