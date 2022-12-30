import Card from "./Card";
import { Live } from "../../assets/svg";

const LiveCard = () => {
  return (
    <Card>
      <div
        className="w-[120px] h-[120px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${Live})`,
        }}
      />
    </Card>
  );
};

export default LiveCard;
