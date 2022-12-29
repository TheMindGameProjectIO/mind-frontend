import Button from "../components/ui/Button";
import { lobbyPagesButton } from "../helpers";
import Light_Rabbit from "../assets/img/light-rabbit.png"
import Regular_Rabbit from "../assets/img/regular-rabbit.png"

const LobbyPage = () => {

    return (
    <div className="center-content flex-col w-fit">
        <div className = "flex flex-row font-play gap-6">
            <div>
                <h2 className = "text-center text-main-light mb-4 font-normal"> Invite a player </h2>
                <div className = "bg-lighter-blue rounded-2xl p-3">
                    <div className = "flex flex-row bg-u-list-gray rounded-2xl p-2 mb-4">
                        {/* FIXME: Later replace this image with normal icon */}
                        <img src = { Regular_Rabbit } alt = "Regular rabbit icon" className = "order-last md:order-first self-center w-full max-w-max" />
                        <p className = "text-main-blue place-self-center mx-4"> MT </p>                        
                        <button className = "bg-added-gray text-cr-gray text-sm rounded-xl px-2 ml-auto"> added </button>
                    </div>  
                    
                    <div className = "flex flex-row bg-u-list-gray rounded-2xl p-2">
                        {/* FIXME: Later replace this image with normal icon */}
                        <img src = { Regular_Rabbit } alt = "Regular rabbit icon" className = "order-last md:order-first self-center w-full max-w-max" />
                        <p className = "text-main-blue place-self-center mx-4"> MrCooldude67 </p>                        
                        <button className = "bg-main-blue text-cr-gray rounded-xl text-sm px-2 ml-auto"> add this user </button>
                    </div>
                </div>
            </div>

            <div className = "flex flex-row border-2 rounded-2xl border-cr-gray place-self-center text-main-light p-2 max-h-36">
                <div className = "mx-2">
                    {/* FIXME: Later replace this image with normal icon */}
                    <img src = { Light_Rabbit } alt = "Light rabbit icon" className = "order-last md:order-first self-center w-full max-w-max" />
                </div>

                <div className = "grid mx-4 text-center content-center">
                    <p className = "font-bold"> Lobby name </p>
                    <p> 1 player </p>
                    <p className = "text-main-gray"> Private </p>
                </div>
            </div>
        </div>
        <div className = "flex flex-row w-full justify-between px-6 gap-6">
            {/* TODO: Button should go back */}
            <Button className={lobbyPagesButton}>
                Back
            </Button>

            {/* TODO: The button should create a lobby*/}
            <Button className={lobbyPagesButton} type="submit">
                Create
            </Button>
        </div>
    </div>
  );
};

export default LobbyPage;