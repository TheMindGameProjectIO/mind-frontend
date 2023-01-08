export type TPlayerResponseData = {
  _id: string;
  nickname: string;
  cards?: number;
};

export type TPlayer = {
  id: string;
  nickname: string;
  cardsAmount?: number;
};

export const playerFactory = (data: TPlayerResponseData) => {
  return {
    id: data._id,
    nickname: data.nickname,
    cardsAmount: data.cards,
  } as TPlayer;
};
