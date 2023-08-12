import { io, Socket } from "socket.io-client";

export default function useSocket() {
  const { $config } = useNuxtApp();
  const socket = useState<Socket>("io");
  const { token } = useAuth();

  const getUserEvents = () => {
    socket.value.on("message:get", (val) => {
      console.log(val);
    });
  };

  /**
   * Create socket.io instance.
   */
  const init = (transports = ["websocket"]) => {
    socket.value = io($config.public.API_URL, {
      transports,
      query: { token: token.value },
    });
    socket.value.on("connect", () => {
      console.log(socket.value.id);
      getUserEvents();
    });
  };

  return { init, socket };
}
