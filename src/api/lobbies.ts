import { Headers } from "../enums";
import { lobbyFactory } from "../types";
import { privateApi } from "./config";

export type TCreateLobbyData = {
  name: string;
  maxUserCount: number;
};

export class LobbiesController {
  static async getOne(id: string) {
    const url = "/game/room/" + id;
    const response = await privateApi.get(url);
    return lobbyFactory(response.data);
  }

  static async create(data: TCreateLobbyData) {
    const url = "/game/room/create";
    const response = await privateApi.post(url, data);

    const { _id } = response.data.room;
    return _id;
  }

  static async join(id: string) {
    const url = "/game/room/join/" + id;
    const response = await privateApi.post(url);
    return response.headers[Headers.SOCKET_GAME_AUTHORIZATION];
  }
}
