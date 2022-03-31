import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringFilter;
  id?: StringFilter;
  userId?: UserWhereUniqueInput;
};
