import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {DetermineWinnerSliceState} from './types'
import { object } from 'prop-types';
export * from './selectors';


const initialState: DetermineWinnerSliceState = {
  eventButton: "",
  text: "",
  TitleText: "",
  sound: true, 
  microphone: true,
}

const determineWinnerSlice = createSlice({
  name: 'determineWinner',
  initialState: initialState,
  reducers: {
    setData(state, action:PayloadAction<DetermineWinnerSliceState>) {
      state.eventButton = action.payload.eventButton  ?? "";
      state.text = action.payload.text ?? "";
      state.TitleText = action.payload.TitleText ?? "";
      state.microphone = action.payload?.microphone ?? true;
      state.sound = action.payload?.sound ?? true;
      
    },

  },
});

export default determineWinnerSlice.reducer;
export const {
  setData,
} = determineWinnerSlice.actions;
