import { Socket } from "socket.io-client";
import { TPlayer } from "../../types";

export interface ServerToClientEvents {
  "auth:verified:email": () => void;
  "auth:verified:password:reset": ({ token }: { token: string }) => void;
  ping: () => void;
  pong: () => void;
  "game:self:joined": () => void;
  "game:created": () => void;
  message: (message: string) => void;
  response: (event: keyof ClientToServerEvents, response: { message: string; status: "success" | "fail" }) => void;
  "game:player:joined": () => void;
  "game:player:left": () => void;
  "game:self:left": () => void;
  "game:started": () => void;
}

export interface ClientToServerEvents {
  ping: () => void;
  pong: () => void;
  "game:start": () => void;
  connection: () => void;
  "game:player:joined": () => void;
}

export type ISocket = Socket<ServerToClientEvents, ClientToServerEvents>;
