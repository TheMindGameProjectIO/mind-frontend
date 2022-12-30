import { privateApi } from "./config";

export type TCreateLobbyData = {
  name: string;
  maxUserCount: number;
};

export class LobbiesController {
  static async getOne(id: string) {
    const url = "/game/room/" + id;
    const response = await privateApi.get(url);
    return response.data;
  }

  static async create(data: TCreateLobbyData) {
    const url = "/game/room";
    const response = await privateApi.post(url, data);
    return response.data;
  }
}
