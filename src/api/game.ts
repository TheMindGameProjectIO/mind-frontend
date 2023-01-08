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

  // IMPORTANT: delete this method
  static async getBoard(id: string) {
    const url = "/room/" + id + "/game/cards/board";
    const response = await privateApi.get(url);
    return response.data;
  }

  // IMPORTANT: delete this method
  static async getCards(id: string) {
    const url = "/room/" + id + "/game/cards/player";
    const response = await privateApi.get(url);
    return response.data;
  }
}
