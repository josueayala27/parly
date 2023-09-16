import { LastChat } from "~/interfaces/chat.interface";

export default function useChat() {
  const { socket } = useSocket();
  // const { $socket } = useNuxtApp();

  const data = reactive<any>({
    lastMessages: [],
  });

  const getLastMessages = async (callback: Function): Promise<void> => {
    try {
      const lastMessages = await useApi<LastChat>("/messages");

      data.lastMessages = lastMessages;
      callback(lastMessages);
    } catch (error) {}
  };

  /**
   * Temp message.
   * @param message
   * @param channel
   */
  const sendMessage = async <T>(message: string, channel: string) => {
    try {
      const _message = await useApi<T>(`channels/${channel}/messages`, {
        method: "POST",
        body: { content: message },
      });

      socket.value.emit("message:send", channel, _message);

      return _message;
    } catch (error) {
      console.log(error);
    }
  };

  const generateTempMessage = (message: string) => {
    return {
      is_temp: true,
      content: message,
      count_likes: 0,
      user: {
        id: 1,
        full_name: "Josué Ayala",
        username: "ayalavalencia11@gmail.com",
        avatar:
          "https://lh3.googleusercontent.com/a/AAcHTtcZ7EF2H3kCFABCEe5d0n0CoDzACHYf6LnR0fkvH26l-L6P=s96-c",
        email: "ayalavalencia11@gmail.com",
      },
    };
  };

  return { getLastMessages, sendMessage, generateTempMessage, data };
}
