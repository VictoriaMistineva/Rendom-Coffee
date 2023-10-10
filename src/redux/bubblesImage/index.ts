import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {bubblesImageSliceState} from './types'
import { object } from 'prop-types';
export * from './selectors';


const initialState: bubblesImageSliceState = {
  users: [],
}

const bubblesImageSlice = createSlice({
  name: 'bubblesImage',
  initialState: initialState,
  reducers: {
    setData(state, action:PayloadAction<bubblesImageSliceState>) {
      state.users = action.payload.users ?? [];
    },

  },
});

export default bubblesImageSlice.reducer;
export const {
  setData,
} = bubblesImageSlice.actions;
