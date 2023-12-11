
import { RootState } from "../index";

export const getParticipantCount = (state: RootState) => state.winner.participantCount
export const getWinners = (state: RootState) => state.winner.winners


