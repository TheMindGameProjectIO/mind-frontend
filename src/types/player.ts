export type TPlayerResponseData = {
  _id: string;
  nickname: string;
  cards?: number;
  isOnline?: boolean;
  reaction?: string;
};

export type TPlayer = {
  id: string;
  nickname: string;
  cardsAmount?: number;
  isOnline?: boolean;
  reaction?: string;
};

export const playerFactory = (data: TPlayerResponseData): TPlayer => {
  return {
    id: data._id,
    nickname: data.nickname,
    cardsAmount: data.cards,
    isOnline: data.isOnline,
    reaction: data.reaction,
  };
};
