import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StartConfirmationPageSliceState } from './types'
import { number } from 'prop-types';
export * from './selectors';


const initialState: StartConfirmationPageSliceState = {
  access: true,
  checkboxAccess: false,
  storiesPage: 0,
  sound: true, 
  microphone: true,
}

const startConfirmationSlice = createSlice({
  name: 'startConfirmation',
  initialState: initialState,
  reducers: {
    setData(state, action: PayloadAction<StartConfirmationPageSliceState>) {
      state.access = action.payload?.access ?? true;
      state.checkboxAccess = action.payload?.checkboxAccess ?? false;
      state.storiesPage = action.payload?.storiesPage;
      state.microphone = action.payload?.microphone ?? true;
      state.sound = action.payload?.sound ?? true;
    },
  },
});

export default startConfirmationSlice.reducer;
export const {
  setData,
} = startConfirmationSlice.actions;
