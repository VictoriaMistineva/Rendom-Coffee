import { PayloadAction,createSlice } from '@reduxjs/toolkit';
import {MeetInfoSliceState} from './types'
export * from './selectors';


const initialState: MeetInfoSliceState = {
  meetInfo: {
    subject: '',
    location: '',
    start: '',
    end: '',
    duration: '',
    date: '',
    jazzLink: '',
    participants: {
      attendees: []
    }
  }
  }

const meetInfoSlice = createSlice({
  name: 'meetInfo',
  initialState: initialState,
  reducers: {
    setData(state, action: PayloadAction<MeetInfoSliceState>) {

      state.meetInfo.participants.attendees = action.payload?.meetInfo.participants.attendees ?? [];
      state.meetInfo = action.payload.meetInfo ?? ''
    }
  },
});

export default meetInfoSlice.reducer;
export const {
  setData,
} = meetInfoSlice.actions;
