import { TCard } from "../types";

export const ligthInputClassName = "bg-main-light text-main-blue font-bold rounded-[18px] my-2";
export const lobbiesButton = "w-full max-w-[200px] text-dark-blue-600 font-bold py-3";

export const hideValue = (hide: boolean, value: TCard) => {
  return !hide ? value : "";
};
export const lobbyPagesButton = "w-full max-w-[200px] text-dark-blue-600 font-bold font-play py-3";

export * from "./soundPlayer";
