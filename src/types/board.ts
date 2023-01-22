import { TCard, cardFactory } from "./card";

export type TBoard = {
  cards: TCard[];
};

export type TBoardResponseData = {
  cards: string[];
};

export const boardFactory = (data: TBoardResponseData) => {
  return { cards: data.cards.map((card) => cardFactory(card)) } as TBoard;
};
