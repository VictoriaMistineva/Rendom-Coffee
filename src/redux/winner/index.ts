import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {WinnerSliceState} from './types'
import { object } from 'prop-types';
export * from './selectors';


const initialState: WinnerSliceState = {
  participantCount: 0,
  winners: []
}

const winnerSlice = createSlice({
  name: 'winner',
  initialState: initialState,
  reducers: {
    setData(state, action:PayloadAction<WinnerSliceState>) {
      state.participantCount = action.payload.participantCount ?? 0;
      state.winners = action.payload.winners ?? [];
    },

  },
});

export default winnerSlice.reducer;
export const {
  setData,
} = winnerSlice.actions;
