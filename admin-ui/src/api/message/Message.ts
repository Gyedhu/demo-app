import { User } from "../user/User";

export type Message = {
  content: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  userId?: User | null;
};
