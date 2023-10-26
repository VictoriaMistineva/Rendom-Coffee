import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {smallUserCardSliceState} from './types'
import { object } from 'prop-types';
export * from './selectors';


const initialState: smallUserCardSliceState = {
  user: {
    id: '',
    avatar: '',
    fullName: '',
    position: null,
    department: '',
    birthdayToday: false,
    phoneMobile: '',
    phoneInner: '',
    emailExternal: '',
    emailInternal: '',
    emailMain: '',
    teams: [],
    isBusy: false,
  },
}

const smallUserCardSlice = createSlice({
  name: 'smallUserCard',
  initialState: initialState,
  reducers: {
    setData(state, action:PayloadAction<smallUserCardSliceState>) {
      state.user = action.payload.user ?? {};
      state.user.avatar = action.payload.user.avatar ?? '';
      state.user.teams = action.payload.user.teams ?? '';
      
    },

  },
});

export default smallUserCardSlice.reducer;
export const {
  setData,
} = smallUserCardSlice.actions;
