import Button from "../components/ui/Button";
import { useState, useRef } from "react";
import { lobbyPagesButton } from "../helpers";
import SwitchField from "../components/ui/Field/SwitchField";
import InputField from "../components/ui/Field/InputField";
import { useEffect, useContext } from "react";
import { LobbiesTitleContext } from "../context/LobbiesTitleProvider";

const CreateLobbyPage = () => {
  const [gameMode, setGameMode] = useState(false);
  const { changeTitle } = useContext(LobbiesTitleContext);
  const lobbyNameRef = useRef<any>();
  const playersNumberRef = useRef<any>();

  useEffect(() => {
    changeTitle("Create a lobby");

    return () => {
      changeTitle("Public lobbies");
    };
  }, []);

  return (
    <div className="center-content flex-col">
      <form className="flex flex-col gap-3 lg:flex-row lg:gap-24 lg:py-4 py-12 px-12 lg:px-4">
        <InputField<string> label="Enter a lobby name" placeholder="my lobby" innerRef={lobbyNameRef} />
        <InputField<number>
          label="Number of players"
          placeholder="2-4"
          transform={(value: string) => parseInt(value)}
          innerRef={playersNumberRef}
        />
        <SwitchField
          label="Game mode"
          checked={gameMode}
          onChange={() => setGameMode(!gameMode)}
          placeholders={{
            on: "Public",
            off: "Private",
          }}
        />
      </form>
      <Button className={lobbyPagesButton} type="submit">
        Create Lobby
      </Button>
    </div>
  );
};

export default CreateLobbyPage;
