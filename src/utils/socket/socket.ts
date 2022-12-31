import { io } from "socket.io-client";
import { ISocket } from "./types";

const SOCKET_URL = (import.meta as any).env.VITE_APP_SOCKET_URL;
export const connection: ISocket = io(SOCKET_URL);

/**
 * @experimental SHOULD NOT BE USED YET
 * @description socket connection handler
 *
 *
 * @example
 * import socket from "path/to/socket";
 * import {useListenEvent} from "path/to/useListenEvent";
 *
 * const Component = ({token}) => {
 *
 *  useEffect(() => {
 *      socket.token = token;
 *  }, [token]);
 *
 *  useListenEvent('pong', () => {
 *     console.log('pong');
 *  }, []);
 *
 *  const sendPing = () => {
 *       socket.connection.emit('ping');
 *  }
 *
 *  return <button onClick={sendPing}>Send Ping</button>
 *
 * }
 */
const socket = {
  connection,
  connected: connection.connected,
  set token(token: string) {
    this.connection.auth = { ...this.connection.auth, token };
  },
};

export default socket;
