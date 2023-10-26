import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UtilsCommandNameSliceState } from './types'
export * from './selectors';


const initialState: UtilsCommandNameSliceState = {
  items: [],
  isMicrophoneOff: false,
  isSoundOff: false,
  actionPopup: {
    isOpen: false,
    status: 'success',
    textItems: [],
    buttonText: '',
  },
  alertPopup: {
    isShow: false,
    title: '',
    subTitle: '',
    list: [],
  },
  howItWorksPopUpIsOpen:false,
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
 
    openActionPopup(state, action: PayloadAction<{ commandName: string }>) {
      switch (action.payload.commandName) {
        case 'popUpStatusSuccess':
          state.actionPopup.status = 'success';
          state.actionPopup.textItems = [
            `<strong>Приглашение <br />на рандом-кофе <br /> отправлено <br /></strong>`,`Свяжитесь с коллегой и назначьте место и время встречи`,`<strong>Вкусного кофе и увлекательных бесед. <br />Пусть день рождения СберБанка принесёт вам <br />интересные знакомства и новых друзей!</strong>`
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
        case 'popUpGrantNotAccessButtonGrantAccess':
          state.actionPopup.status = 'fail';
          state.actionPopup.textItems = [
            `Для выставления встреч<br/>
            с помощью ассистента<br/>
            необходимо предоставить<br/>
            доступ к календарю<br/>`,
          ];
          state.actionPopup.buttonText = 'Предоставить доступ';
          break
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
    openAlertPopup(state, { payload }) {
      state.alertPopup.isShow = true;
      state.alertPopup.title = payload.title ?? '';
      state.alertPopup.subTitle = payload.subTitle ?? '';
    },
    closeAlertPopup(state) {
      state.alertPopup.isShow = false;
    },
    openHowItWorksPopUp(state) {
      state.howItWorksPopUpIsOpen = true;
    },
    closeHowItWorksPopUp(state) {
      state.howItWorksPopUpIsOpen = false;
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
  openAlertPopup,
  closeAlertPopup,
  openHowItWorksPopUp,
  closeHowItWorksPopUp,
} = utilsCommandNameSlice.actions;
