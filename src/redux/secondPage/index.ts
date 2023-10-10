import { createSlice } from '@reduxjs/toolkit';
import {SecondPageSliceState} from './types'
export * from './selectors';


const initialState: SecondPageSliceState = {
  items: []
}

const secondPageSlice = createSlice({
  name: 'secondPage',
  initialState: initialState,
  reducers: {
    setData(state, { payload }) {
      state.items = payload?.items ?? [];
    },

  },
});

export default secondPageSlice.reducer;
export const {
  setData,
} = secondPageSlice.actions;
