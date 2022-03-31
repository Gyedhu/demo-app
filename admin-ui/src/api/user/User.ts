import { Message } from "../message/Message";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
