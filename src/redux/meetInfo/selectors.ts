
import { RootState } from "../index";

export const getMeetInfo = (state: RootState) => state.meetInfo.meetInfo;
export const getAttendees = (state: RootState) => state.meetInfo.meetInfo.participants.attendees;



