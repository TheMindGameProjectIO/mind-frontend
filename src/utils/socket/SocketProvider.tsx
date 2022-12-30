import { useEffect, ReactNode, FC, createContext, useReducer, useContext, DependencyList } from "react";
import socket from "./socket";
import { ServerToClientEvents } from "./types";

/**
 * Socket Props (not expected to be changed)
 */
interface Props {
  /**
   * consumers of the socket
   */
  children: ReactNode;
}

/**
 * Socket Context
 */
export interface ISocketContext {
  /**
   * socket connection status
   */
  isConnected: boolean;
}

const defaultContext: ISocketContext = {
  isConnected: false,
};

/**
 * Socket State
 */
export interface IState extends Pick<ISocketContext, "isConnected"> {}

const defaultState: IState = {
  isConnected: false,
};

export const SocketContext = createContext<ISocketContext>(defaultContext);

const SocketProvider: FC<Props> = ({ children }) => {
  const [
    {
      // add your states here
      isConnected,
    },
    dispatch,
  ] = useReducer((state: IState, newState: Partial<IState>) => ({ ...state, ...newState }), defaultState);

  useEffect(() => {
    socket.connection.on("connect", () => {
      dispatch({ isConnected: true });
    });

    socket.connection.on("disconnect", () => {
      dispatch({ isConnected: false });
    });

    socket.connection.on("connect_error", (err: any) => {
      console.log(`connect_error due to ${err.message}`);
    });

    return () => {
      socket.connection.off("connect");
      socket.connection.off("disconnect");
    };
  }, []);

  return <SocketContext.Provider value={{ isConnected }}>{children}</SocketContext.Provider>;
};

/**
 * custom hook to access socket context states
 * @returns socket context states
 */
export const useSocket = (): ISocketContext => {
  const { isConnected } = useContext(SocketContext);
  return { isConnected };
};

/**
 * custom hook to listen to the socket events
 * @param event event emmitted by the server
 * @param listener listener function
 * @param deps will re-subscribe to the event when any of the dependencies change
 *
 * @example
 * useListenEvent('auth:verified:email', () => {
 *    console.log(user.email + ' is verified!');
 * }, [user.email]);
 *
 */
export function useListenEvent<Ev extends keyof ServerToClientEvents>(
  event: Ev,
  listener: ServerToClientEvents[Ev],
  deps?: DependencyList
) {
  useEffect(() => {
    socket.connection.on(event, listener as any);
    return () => {
      socket.connection.off(event, listener as any);
    };
  }, deps);
}

export default SocketProvider;
