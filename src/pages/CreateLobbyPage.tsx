import Button from "../components/ui/Button";
import { FC } from "react";
import Input from "../components/ui/Input";
import { ligthInputClassName, lobbyPagesButton } from "../helpers";
import InputField from "../components/ui/Field/InputField";

const CreateLobbyPage = () => {
  return (
    <div className="flex center-content flex-col">
      <form className="flex gap-24">
        <InputField label="Enter a lobby name" placeholder="my lobby" />
        <InputField label="Enter a lobby name" placeholder="my lobby" />
      </form>
      <Button className={lobbyPagesButton}>Create Lobby</Button>
    </div>
  );
};

export default CreateLobbyPage;
