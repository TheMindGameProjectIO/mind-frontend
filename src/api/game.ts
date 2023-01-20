import { gameFactory } from "../types";
import { privateApi } from "./config";

export class GameController {
  static async start(id: string) {
    const url = "/room/game/start/" + id;
    const response = await privateApi.post(url);
    return response.data;
  }

  static async getOne(id: string) {
    const url = "/room/" + id + "/game";
    const response = await privateApi.get(url);
    return gameFactory(response.data);
  }
}
