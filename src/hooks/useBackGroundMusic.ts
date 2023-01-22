import { useEffect } from "react";
import { playSoundEffect, loopSoundEffect, changeVoulme, stopSoundEffect } from "../helpers";

const useBackgroundMusic = (ref: any) => {
  useEffect(() => {
    playSoundEffect(ref);
    loopSoundEffect(ref);
    changeVoulme(ref, 0.1);

    return () => {
      stopSoundEffect(ref);
    };
  }, []);

  return {};
};

export default useBackgroundMusic;
