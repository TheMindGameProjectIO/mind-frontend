import { FC } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

interface ISoundHandlerProps {
  muted: boolean;
  mute: () => void;
  unmute: () => void;
}

const SoundHandler: FC<ISoundHandlerProps> = ({ muted, mute, unmute }) => {
  return (
    <div
      onClick={() => {
        if (muted) unmute();
        else mute();
      }}
      className="fixed top-16 left-3 cursor-pointer bg-main-blue/80 text-xl text-white found-bold p-3 rounded-xl"
    >
      {!muted ? <FiVolume2 /> : <FiVolumeX />}
    </div>
  );
};

export default SoundHandler;
