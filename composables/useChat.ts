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

  const sendMessage = async (message: string, channel: string) => {
    try {
      const res = await useApi("channels/25/messages", {
        method: "POST",
        body: {
          content: message,
        },
      });

      socket.value.emit("message:send", {
        channel,
        message,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return { getLastMessages, sendMessage, data };
}
