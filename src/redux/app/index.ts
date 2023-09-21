import { createSlice } from '@reduxjs/toolkit';
import {AppSliceState} from './types'
export * from './selectors';

const initialState: AppSliceState = {
  isBlur: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    turnOnBlur(state) {
      state.isBlur = true;
    },
    turnOffBlur(state) {
      state.isBlur = false;
    }
  },
});

export default appSlice.reducer;
export const {
  turnOnBlur,
  turnOffBlur,
} = appSlice.actions;
export type AppSliceType = typeof appSlice