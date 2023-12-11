import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {UserRegistrationSliceState} from './types'
import { object } from 'prop-types';
export * from './selectors';


const initialState: UserRegistrationSliceState = {
  status: "",
  text: []
}

const userRegistrationSlice = createSlice({
  name: 'userRegistration',
  initialState: initialState,
  reducers: {
    setData(state, action:PayloadAction<UserRegistrationSliceState>) {
      state.status = action.payload.status ?? "";
      state.text = action.payload.text ?? [];
    },

  },
});

export default userRegistrationSlice.reducer;
export const {
  setData,
} = userRegistrationSlice.actions;
