import { PayloadAction,createSlice } from '@reduxjs/toolkit';
import {YourLocationPageSliceState} from './types'
export * from './selectors';


const initialState: YourLocationPageSliceState = {
  "city": '',
  "cities": []
  }

const yourLocationSlice = createSlice({
  name: 'yourLocation',
  initialState: initialState,
  reducers: {
    setData(state, action: PayloadAction<YourLocationPageSliceState>) {
      state.city = action.payload.city ?? '';
      state.cities = action.payload.cities ?? [];
    }
  },
});

export default yourLocationSlice.reducer;
export const {
  setData,
} = yourLocationSlice.actions;
