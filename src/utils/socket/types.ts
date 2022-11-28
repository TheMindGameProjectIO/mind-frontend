import { Socket } from "socket.io-client";

export interface ServerToClientEvents {
    pong: () => void;
    'auth:verified:email': () => void;
}

export interface ClientToServerEvents {
    ping: () => void;
}

export type ISocket = Socket<ServerToClientEvents, ClientToServerEvents>