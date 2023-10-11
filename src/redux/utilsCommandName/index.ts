import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MainPageSliceState } from './types'
export * from './selectors';


const initialState: MainPageSliceState = {
  items: [],
  isMicrophoneOff: false,
  isSoundOff: false,
  actionPopup: {
    isOpen: false,
    status: 'success',
    textItems: [],
    buttonText: '',
  },
  commandName: ""
}

const utilsCommandNameSlice = createSlice({
  name: 'utilsCommandName',
  initialState: initialState,
  reducers: {
    setData(state, { payload }) {
      state.items = payload?.items ?? [];
    },
    turnOnMicrophone(state) {
      state.isMicrophoneOff = false;
    },
    turnOffMicrophone(state) {
      state.isMicrophoneOff = true;
    },
    turnOnSound(state) {
      state.isSoundOff = false;
    },
    turnOffSound(state) {
      state.isSoundOff = true;
    },
    //any убрать

    openActionPopup(state , action: PayloadAction<{commandName: string }>) {
      switch (action.payload.commandName) {
        case 'popUpStatusSuccess':
          state.actionPopup.status = 'success';
          state.actionPopup.textItems = [
            `<strong>Приглашение <br /> на встречу <br /> отправлено <br /></strong>`,
          ];
          break;

        case 'popUpStatusError':
          state.actionPopup.status = 'fail';
          state.actionPopup.textItems = [
            '<strong>Не удалось отправить, <br /> попробуйте еще раз</strong>',
          ];
          break;

        case 'popUpAccessNotCurrentlyGranted':
          state.actionPopup.status = 'fail';
          state.actionPopup.textItems = [
            `Предоставляется доступ`,
          ];
          break;
        case 'popUpRequestAccess':
          state.actionPopup.status = 'success';
          state.actionPopup.textItems = [
            `Предоставление доступа займет 15 минут`,
          ];
          break;
        case 'UsersNotFound':
          state.actionPopup.status = 'fail';
          state.actionPopup.textItems = [
            `Пользователи не найдены`,
          ];
          break;
        default:
          break;
      }
      state.actionPopup.isOpen = true;
    },
    closeActionPopup(state) {
      state.actionPopup.status = 'success';
      state.actionPopup.textItems = [];
      state.actionPopup.isOpen = false;
      state.actionPopup.buttonText = '';
    },


  },
});

export default utilsCommandNameSlice.reducer;
export const {
  setData,
  turnOffMicrophone,
  turnOnMicrophone,
  turnOnSound,
  turnOffSound,
  openActionPopup,
  closeActionPopup,
} = utilsCommandNameSlice.actions;
