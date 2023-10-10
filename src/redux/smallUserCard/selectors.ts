
import { RootState } from "../index";

export const getUsers = (state: RootState) => state.smallUserCard.user;
export const getAvatar = (state:RootState) => state.smallUserCard.avatar



