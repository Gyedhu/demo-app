import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  content: string;
  userId?: UserWhereUniqueInput | null;
};
