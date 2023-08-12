import { io, Socket } from "socket.io-client";

export default function useSocket() {
  const { $config } = useNuxtApp();
  const socket = useState<Socket>("io");

  const getUserEvents = () => {
    socket.value.on("message:get", (val) => {
      console.log(val);
    });
  };

  /**
   * Create socket.io instance.
   */
  const init = (transports = ["websocket"]) => {
    socket.value = io($config.public.API_URL, { transports });
    socket.value.on("connect", () => {
      console.log(socket.value.id);
      getUserEvents();
    });
  };

  return { init, socket };
}
