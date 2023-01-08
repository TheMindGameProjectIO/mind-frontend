import { cardFactory, TCard } from "./card";
import { TPlayerResponseData, TPlayer, playerFactory } from "./player";

export type TGame = {
  players: TPlayer[];
  clientCards: TCard[];
  cardsOnBoard: TCard[];
  hasShootingStar: boolean;
  currentLevel: number;
};

export type TGameResponseData = {
  game: {
    cards: string[];
    _id: string;
    players: TPlayerResponseData[];
    hasShootingStar: boolean;
    currentLevel: number;
  };

  cards: string[];
};

export const gameFactory = (data: TGameResponseData) => {
  return {
    clientCards: data.cards.map((card) => cardFactory(card)),
    cardsOnBoard: data.game.cards.map((card) => cardFactory(card)),
    players: data.game.players.map((player) => playerFactory(player)),
    hasShootingStar: data.game.hasShootingStar,
    currentLevel: data.game.currentLevel,
  } as TGame;
};
