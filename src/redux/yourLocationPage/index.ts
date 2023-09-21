import { createSlice } from '@reduxjs/toolkit';
import {YourLocationPageSliceState} from './types'
export * from './selectors';


const initialState: YourLocationPageSliceState = {
    items: Array<string>
  }

const yourLocationSlice = createSlice({
  name: 'yourLocation',
  initialState: initialState,
  reducers: {
    setData(state, { payload }) {
      state.items = payload?.items ?? [];
    }
  },
});

export default yourLocationSlice.reducer;
export const {
  setData,
} = yourLocationSlice.actions;
