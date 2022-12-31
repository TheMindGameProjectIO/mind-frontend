import { Socket } from "socket.io-client";

export interface ServerToClientEvents {
  "auth:verified:email": () => void;
  "auth:verified:password:reset": ({ token }: { token: string }) => void;
  ping: () => void;
  pong: () => void;
  "game:self:joined": () => void;
  message: (message: string) => void;
}

export interface ClientToServerEvents {
  ping: () => void;
  pong: () => void;
  "game:start": () => void;
}

export type ISocket = Socket<ServerToClientEvents, ClientToServerEvents>;
