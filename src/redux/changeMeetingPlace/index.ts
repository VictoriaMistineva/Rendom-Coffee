import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {ChangeMeetingPlaceSliceState} from './types'
import { object } from 'prop-types';
export * from './selectors';


const initialState: ChangeMeetingPlaceSliceState = {
  meetingPoint: "",
}

const changeMeetingPlaceSlice = createSlice({
  name: 'changeMeetingPlace',
  initialState: initialState,
  reducers: {
    setData(state, action:PayloadAction<ChangeMeetingPlaceSliceState>) {
      state. meetingPoint = action.payload.meetingPoint ?? "";
    },

  },
});

export default changeMeetingPlaceSlice.reducer;
export const {
  setData,
} = changeMeetingPlaceSlice.actions;
