import { privateApi } from "./config";

export class GameController {
  static async start(id: string) {
    const url = "/room/game/start/" + id;
    const response = await privateApi.post(url);
    return response.data;
  }

  static async getBoard(id: string) {
    const url = "/room/" + id + "/game/cards/board";
    const response = await privateApi.get(url);
    return response.data;
  }

  static async getCards(id: string) {
    const url = "/room/" + id + "/game/cards/player";
    const response = await privateApi.get(url);
    return response.data;
  }
}
