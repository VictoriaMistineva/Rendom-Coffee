
import { RootState } from "../index";

export const getEventButton = (state: RootState) => state.determineWinner.eventButton;
export const getText = (state: RootState) => state.determineWinner.text;
export const getTitleText = (state: RootState) => state.determineWinner.TitleText;
export const getMicrophoneWeb = (state: RootState) => state.startConfirmation.microphone;
export const getSoundWeb = (state: RootState) => state.startConfirmation.sound;


