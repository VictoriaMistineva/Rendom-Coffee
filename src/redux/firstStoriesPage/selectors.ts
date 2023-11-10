
import { RootState } from "../index";
export const getAccess = (state: RootState) => state.startConfirmation.access;
export const getCheckboxAccess = (state: RootState) => state.startConfirmation.checkboxAccess;
export const getStoriesPage = (state: RootState) => state.startConfirmation.storiesPage;
export const getMicrophoneWeb = (state: RootState) => state.startConfirmation.microphone;
export const getSoundWeb = (state: RootState) => state.startConfirmation.sound;
