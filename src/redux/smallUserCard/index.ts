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
    departament: '',
    birthdayToday: false,
    phoneMobile: '',
    phoneInner: '',
    emailExternal: '',
    emailInternal: '',
    emailMain: '',
    team: {
      deptName: '',
      role: ''
    }
  },
  avatar: '',
}

const smallUserCardSlice = createSlice({
  name: 'smallUserCard',
  initialState: initialState,
  reducers: {
    setData(state, action:PayloadAction<smallUserCardSliceState>) {
      state.user = action.payload.user ?? {};
      state.avatar = action.payload.avatar ?? '';
      
    },

  },
});

export default smallUserCardSlice.reducer;
export const {
  setData,
} = smallUserCardSlice.actions;
