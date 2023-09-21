
import { RootState } from "../index";

export const getitems = (state: RootState) => state.mainPage.items;
export const getIsMicrophoneOff = (state: RootState) => state.mainPage.isMicrophoneOff;
export const getIsSoundOff = (state: RootState) => state.mainPage.isSoundOff;


