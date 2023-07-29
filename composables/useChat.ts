import { LastChat } from "~/interfaces/chat.interface";

export default function useChat() {
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

  return { getLastMessages, data };
}
