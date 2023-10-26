
import { RootState } from "../index";

export const getUsers = (state: RootState) => state.smallUserCard.user;
export const getAvatar = (state:RootState) => state.smallUserCard.user.avatar
export const getTeams = (state:RootState) => state.smallUserCard.user.teams



