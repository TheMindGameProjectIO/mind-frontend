export const stopSoundEffect = (ref: any) => {
  const player = ref.current as unknown as HTMLAudioElement;

  if (player) {
    player.pause();
  }
};

export const playSoundEffect = (ref: any) => {
  const player = ref.current as unknown as HTMLAudioElement;

  if (player) {
    player.play();
  }
};

export const loopSoundEffect = (ref: any) => {
  const player = ref.current as unknown as HTMLAudioElement;

  if (player) {
    player.loop = true;
  }
};

export const changeVoulme = (ref: any, volume: number) => {
  const player = ref.current as unknown as HTMLAudioElement;

  if (player) {
    player.volume = volume;
  }
};
