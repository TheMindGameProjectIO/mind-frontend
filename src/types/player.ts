export type TPlayerResponseData = {
  _id: string;
  nickname: string;
};

export type TPlayer = {
  id: string;
  nickname: string;
};

export const playerFactory = (data: TPlayerResponseData) => {
  return {
    id: data._id,
    nickname: data.nickname,
  } as TPlayer;
};
