import { io, Socket } from "socket.io-client";

export default function useSocket() {
  const { $config } = useNuxtApp();
  const socket = useState<Socket>("io");
  const { token } = useAuth();

  const getEvent = (event: string, callback: (...args: any[]) => void) => {
    socket.value.on(event, callback);
  };

  /**
   * Create socket.io instance.
   */
  const init = (transports = ["websocket"]) => {
    socket.value = io($config.public.API_URL, {
      transports,
      query: { token: token.value },
    });
  };

  return { init, socket, getEvent };
}
