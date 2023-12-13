
import { RootState } from "../index";

export const getStatus = (state: RootState) => state.userRegistration.status
export const getText = (state: RootState) => state.userRegistration.text
export const getMicrophoneRegistrationWeb = (state: RootState) => state.userRegistration.microphone;
export const getSoundRegistrationWeb = (state: RootState) => state.userRegistration.sound;

