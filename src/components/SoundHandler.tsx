import { FC } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

interface ISoundHandlerProps {
  muted: boolean;
  mute: () => void;
  unmute: () => void;
}

const SoundHandler: FC<ISoundHandlerProps> = ({ muted, mute, unmute }) => {
  return (
    <div className="fixed top-6 left-6">{muted ? <FiVolume2 onClick={mute} /> : <FiVolumeX onClick={unmute} />}</div>
  );
};

export default SoundHandler;
