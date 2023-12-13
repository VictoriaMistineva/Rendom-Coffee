import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {UserRegistrationSliceState} from './types'
import { object } from 'prop-types';
export * from './selectors';


const initialState: UserRegistrationSliceState = {
  status: "",
  text: [],
  sound: true, 
  microphone: true,
}

const userRegistrationSlice = createSlice({
  name: 'userRegistration',
  initialState: initialState,
  reducers: {
    setData(state, action:PayloadAction<UserRegistrationSliceState>) {
      state.status = action.payload.status ?? "";
      state.text = action.payload.text ?? [];
      state.microphone = action.payload?.microphone ?? true;
      state.sound = action.payload?.sound ?? true;
    },

  },
});

export default userRegistrationSlice.reducer;
export const {
  setData,
} = userRegistrationSlice.actions;
