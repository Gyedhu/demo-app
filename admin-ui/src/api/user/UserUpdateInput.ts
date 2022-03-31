import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
