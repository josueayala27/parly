import { User } from "./user.interface";

export interface LastChat {
  channel_name?: undefined;
  message_content?: string;
  is_group?: boolean;
  chat_whit?: User | undefined;
  message_author?: User;
}
