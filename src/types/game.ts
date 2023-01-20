import { cardFactory, TCard } from "./card";
import { TPlayerResponseData, TPlayer, playerFactory } from "./player";

export type TGame = {
  players: TPlayer[];
  clientCards: TCard[];
  cardsOnBoard: TCard[];
  hasShootingStar: boolean;
  currentLevel: number;
  mistakesLeft: number;
  totalMistakes: number;
  hasWon: boolean;
  hasLost: boolean;

  // shootingStar: TShootingStarData;
};

type TShootingStarData = {
  voted: number;
  total: number;
  isVoted: boolean;
  isVoting: boolean;
};

export type TGameResponseData = {
  game: {
    cards: string[];
    _id: string;
    players: TPlayerResponseData[];
    hasShootingStar: boolean;
    currentLevel: number;
    mistakesLeft: number;
    totalMistakes: number;
    hasWon: boolean;
    hasLost: boolean;
  };

  shootingStar: {
    voted: number;
    total: number;
    isVoted: boolean;
    isVoting: boolean;
  };

  player: {
    cards: string[];
    _id: string;
    nickname: string;
  };

  played?: {
    card: string;
    isShootingStar: boolean;
    isSmallest: boolean;
    player: {
      _id: string;
      nickname: string;
    };
  };
};

export const gameFactory = (data: TGameResponseData): TGame => {
  return {
    clientCards: data.player.cards.map((card) => cardFactory(card)),
    cardsOnBoard: data.game.cards.map((card) => cardFactory(card)),
    players: data.game.players.map((player) => playerFactory(player)),
    hasShootingStar: data.game.hasShootingStar,
    currentLevel: data.game.currentLevel,
    mistakesLeft: data.game.mistakesLeft,
    totalMistakes: data.game.totalMistakes,
    hasWon: data.game.hasWon,
    hasLost: data.game.hasLost,
    // shootingStar: shootingStarDataFactory(data),
  };
};

export const emptyGameFactory = (): TGame => {
  return {
    clientCards: [],
    cardsOnBoard: [],
    players: [],
    hasShootingStar: false,
    currentLevel: 0,
    mistakesLeft: 0,
    totalMistakes: 0,
    hasWon: false,
    hasLost: false,
    // shootingStar: emptyShootingStarDataFactory(),
  };
};

const shootingStarDataFactory = (data: TGameResponseData): TShootingStarData => {
  return {
    voted: data.shootingStar.voted,
    total: data.shootingStar.total,
    isVoted: data.shootingStar.isVoted,
    isVoting: data.shootingStar.isVoting,
  };
};

const emptyShootingStarDataFactory = (): TShootingStarData => {
  return {
    voted: 0,
    total: 0,
    isVoted: false,
    isVoting: false,
  };
};
