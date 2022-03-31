import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string;
  userId?: UserWhereUniqueInput | null;
};
