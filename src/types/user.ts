type TUserResponseData = {
  _id: string;
  email: string;
  nickname: string;
};

export type User = {
  id: string;
  email: string;
  nickname: string;
};

export const userFactory = (data: TUserResponseData) => {
  return {
    id: data._id,
    email: data.email,
    nickname: data.nickname,
  } as User;
};
