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
  played: TPlayedData;
  shootingStar: TShootingStarData;
};

type TShootingStarData = {
  voted: number;
  total: number;
  hasVoted: boolean;
  isVoting: boolean;
  nickname: string;
};

type TPlayedData = {
  card: TCard;
  isShootingStar: boolean;
  isSmallest: boolean;
  player: TPlayer;
} | null;

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
    hasVoted: boolean;
    isVoting: boolean;
    nickname: string;
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
    played: playedDataFactory(data),
    shootingStar: shootingStarDataFactory(data),
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
    played: emptyPlayedDataFactory(),
    shootingStar: emptyShootingStarDataFactory(),
  };
};

const shootingStarDataFactory = (data: TGameResponseData): TShootingStarData => {
  return {
    voted: data.shootingStar.voted,
    total: data.shootingStar.total,
    hasVoted: data.shootingStar.hasVoted,
    isVoting: data.shootingStar.isVoting,
    nickname: data.shootingStar.nickname,
  };
};

const emptyShootingStarDataFactory = (): TShootingStarData => {
  return {
    voted: 0,
    total: 0,
    hasVoted: false,
    isVoting: false,
    nickname: "",
  };
};

const playedDataFactory = (data: TGameResponseData): TPlayedData => {
  if (!data.played) return emptyPlayedDataFactory();

  return {
    card: cardFactory(data.played.card),
    isShootingStar: data.played.isShootingStar,
    isSmallest: data.played.isSmallest,
    player: playerFactory(data.played.player),
  };
};

const emptyPlayedDataFactory = (): TPlayedData => {
  return null;
};
