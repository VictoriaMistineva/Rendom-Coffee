
import { RootState } from "../index";

export const getItems = (state: RootState) => state.utilsCommandName.items;
export const getIsMicrophoneOff = (state: RootState) => state.utilsCommandName.isMicrophoneOff;
export const getIsSoundOff = (state: RootState) => state.utilsCommandName.isSoundOff;
export const getActionPopup = (state:RootState) => state.utilsCommandName.actionPopup;
export const getAlertPopup = (state:RootState) => state.utilsCommandName.alertPopup;