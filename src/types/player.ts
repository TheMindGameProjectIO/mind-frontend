export type TPlayerResponseData = {
  _id: string;
  nickname: string;
  cards?: number;
  isOnline?: boolean;
};

export type TPlayer = {
  id: string;
  nickname: string;
  cardsAmount?: number;
  isOnline?: boolean;
};

export const playerFactory = (data: TPlayerResponseData): TPlayer => {
  return {
    id: data._id,
    nickname: data.nickname,
    cardsAmount: data.cards,
    isOnline: data.isOnline,
  };
};
