import { createSlice } from '@reduxjs/toolkit';
import {MainPageSliceState} from './types'
export * from './selectors';


const initialState: MainPageSliceState = {
    items: [],
    isMicrophoneOff: false,
    isSoundOff: false,
  }

const utilsCommandNameSlice = createSlice({
  name: 'utilsCommandName',
  initialState: initialState,
  reducers: {
    setData(state, { payload }) {
      state.items = payload?.items ?? [];
    },
    turnOnMicrophone(state) {
      state.isMicrophoneOff = false;
    },
    turnOffMicrophone(state) {
      state.isMicrophoneOff = true;
    },
    turnOnSound(state) {
      state.isSoundOff = false;
    },
    turnOffSound(state) {
      state.isSoundOff = true;
    },

  },
});

export default utilsCommandNameSlice.reducer;
export const {
  setData,
  turnOffMicrophone,
  turnOnMicrophone,
  turnOnSound,
  turnOffSound,
} = utilsCommandNameSlice.actions;
