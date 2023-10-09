
import { RootState } from "../index";

export const getItems = (state: RootState) => state.utilsCommandName.items;
export const getIsMicrophoneOff = (state: RootState) => state.utilsCommandName.isMicrophoneOff;
export const getIsSoundOff = (state: RootState) => state.utilsCommandName.isSoundOff;


