import { User } from "./user.interface";

export interface LastChat {
  id: number;
  channel_name?: undefined;
  message_content?: string;
  is_group?: boolean;
  chat_whit?: User | undefined;
  message_author?: User;
  created_at: string;
  image: string;
}
