import { FC } from "react";

interface ISoundEffectPlayerProps {
  src: string;
  innerRef: any;
}

const SoundEffectPlayer: FC<ISoundEffectPlayerProps> = ({ src, innerRef }) => {
  return (
    <audio controls hidden ref={innerRef}>
      <source src={src} type="audio/mpeg" />
    </audio>
  );
};

export default SoundEffectPlayer;
