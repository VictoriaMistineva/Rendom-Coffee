/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import { initialize } from '../../api/connection';
import testData from '../../testData/main.json';
import { AssistantSliceState, CommandParams, SmartAppResponseType, AlertPopUp } from './types'
// import { RuleSet } from 'styled-components';
import { AppDispatch, RootState } from '..';
import { setData as setFirstStoriesPage } from '../firstStoriesPage'
import { setData as setSelectionMethod } from '../selectionMethodPage'
import { StartConfirmationPageSliceState } from '../firstStoriesPage/types';
import { setData as setBubblesImage } from '../bubblesImage';
import { setData as setSmallUserCard } from '../smallUserCard';
import { setData as setDetermineWinner } from '../determineWinner'
import { setData as setChangeMeeting } from '../changeMeetingPlace';
import { setData as setUserRegistration } from '../userRegistration'
import { setData as setWinner } from '../winner'
export * from './selectors';
import {
  turnOffMicrophone,
  turnOffSound,
  turnOnMicrophone,
  turnOnSound,
  openActionPopup,
  closeActionPopup,
  openHowItWorksPopUp,
  closeHowItWorksPopUp,
  openAlertPopup,
} from '../utilsCommandName';
import { selectionMethodPageSliceState } from '../selectionMethodPage/types';
import { bubblesImageSliceState } from '../bubblesImage/types';
import { smallUserCardSliceState } from '../smallUserCard/types';
import { ChangeMeetingPlaceSliceState } from '../changeMeetingPlace/types';
import { UserRegistrationSliceState } from '../userRegistration/types';
import { DetermineWinnerSliceState } from '../determineWinner/types';
import { WinnerSliceState } from '../winner/types';


let assistant: any = null;

const initialState: AssistantSliceState = {
  page: '',
  isLoading: true,
  errorInfo: null,
  isMobile: false,
}

const assistantSlice = createSlice({
  name: 'assistant',
  initialState: initialState,
  reducers: {
    sendData(state, { payload }) {
      console.log("sendData--- " + JSON.stringify(payload.action_id, null, 2))
      // console.log("state--- " + JSON.stringify(state , null, 2))
      if (
        payload.action_id === 'DataFromFront' &&
        !payload.forced
      )
        return;

      if (
        ![
          'ConnectionYes',
        ].includes(payload.action_id)
      )
        state.isLoading = true;

      assistant?.sendData({
        action: payload,
      });
    },
    finishIsLoading(state) {
      state.isLoading = false;
    },
    startIsLoading(state) {
      state.isLoading = true;
    },
    setPage(state, { payload: { page } }) {
      state.page = page;
    },
    close() {
      assistant.close();
    },
    setErrorInfo(state, { payload }) {
      state.errorInfo = payload ?? '';
    },
    setIsMobile(state, { payload }) {
      state.isMobile = payload ?? false;
    },

  },
});

export const {
  sendData,
  finishIsLoading,
  startIsLoading,
  setPage,
  close,
  setErrorInfo,
  setIsMobile
} = assistantSlice.actions;
export default assistantSlice.reducer;

//screenName обработка и добавление data в redux
//  page = '/  в   <Route path="/" >
const processAssistantParams = (dispatch: AppDispatch, commandParams: CommandParams) => {
  const screenName = commandParams.screenName;
  const data = commandParams.data;

  let page = '';
  switch (screenName) {
    case 'SearchResult':
      page = '/searchResult'
      dispatch(setBubblesImage(data as bubblesImageSliceState));
      break;
    case 'SmallUserCard':
      page = '/smallUserCard'
      dispatch(setSmallUserCard(data as smallUserCardSliceState))
      break
    case 'ExtendedUserCard':
      page = '/extendedUserCard'
      dispatch(setSmallUserCard(data as smallUserCardSliceState))
      break
    case 'WinnerPage':
      page = "/winnerPage"
      dispatch(setWinner(data as WinnerSliceState))
      break
    case 'UserRegistration':
      page = "/userRegistration"
      dispatch(setUserRegistration(data as UserRegistrationSliceState))
      break
    case 'DetermineWinnerPage':
      page = "/determineWinnerPage"
      dispatch(setDetermineWinner(data as DetermineWinnerSliceState))
      break
  }
  dispatch(setPage({ page }));
};

// обработка commandName и сразу отрисовка команды

const processAssistantCommand = (dispatch: AppDispatch, commandName: string, getState?: RootState, commandParams?: CommandParams) => {
  switch (commandName) {
    case 'ExitFromCanvas':
      dispatch(close());
      break;
    case 'MicrophoneTurnOff':
      dispatch(turnOffMicrophone());
      break;
    case 'MicrophoneTurnOn':
      dispatch(turnOnMicrophone());
      break;
    case 'SoundTurnOn':
      dispatch(turnOnSound());
      break;
    case 'SoundTurnOff':
      dispatch(turnOffSound());
      break;
    case 'ShowNoMatchPopup':
      {
        const data = commandParams?.data as AlertPopUp
        if (data)
          dispatch(
            openAlertPopup({
              title: data.title,
              subtitle: data.subtitle,
            })
          );
      }
      break;
    case 'popUpStatusError':
      dispatch(
        openActionPopup({ commandName: commandName })
      );
      break;
    case 'popUpStatusSuccess':
      dispatch(
        openActionPopup({ commandName: commandName })
      );
      break;
    case 'popUpAccessNotCurrentlyGranted':
      dispatch(
        openActionPopup({ commandName: commandName })
      );
      break;
    case 'popUpRequestAccess':
      dispatch(
        openActionPopup({ commandName: commandName })
      );
      break;
    case 'popUpGrantNotAccessButtonGrantAccess':
      dispatch(
        openActionPopup({ commandName: commandName })
      );
      break;
    case 'HowItWorks':
      dispatch(
        openHowItWorksPopUp()
      );
      break;
    // тут должны закрываться все попапы
    case 'HidePopupOnScreen':
      dispatch(closeActionPopup());
      dispatch(closeHowItWorksPopUp());
      break;
    default:
      break;
  }
};

// должно вызываться только один раз и только в одном месте, сейчас в layout
export const initAssistant = () => (dispatch: AppDispatch, getState: RootState) => {
  // @ts-ignore
  assistant = initialize(() => null);

  // eslint-disable-next-line no-undef
  // REACT_APP_BUILD === 'test' - режим теста с JSON файлом
  if (process.env.REACT_APP_BUILD === 'test') {
    const { commandParams, commandName } = testData.smart_app_data;
    dispatch(finishIsLoading());
    processAssistantParams(dispatch, { ...commandParams });
    processAssistantCommand(dispatch, commandName, getState, commandParams);
    return;
  }

  // @ts-ignore
  assistant.on('start', () => {
    // @ts-ignore
    window.AssistantHost?.closeKeyboard?.()
  })
  assistant.on('data', (response: SmartAppResponseType) => {
    // dispatch(setErrorInfo(response));
    const data =
      // response;
      // eslint-disable-next-line no-undefined
      // testData - JSON файл from '../../testData/main.json';

      process.env.REACT_APP_BUILD === 'release' ? response : testData;
    // debugger;
    if (data?.type !== 'smart_app_data' || !data.smart_app_data) return;

    const commandParams = data.smart_app_data?.commandParams as CommandParams;
    const commandName = data.smart_app_data.commandName;

    if (commandName === "pingPong") {
      console.log("Sent event " + commandParams?.eventName + " with parameters");
      console.log(commandParams?.eventParams);
      assistant.sendData({
        action: {
          action_id: commandParams?.eventName || "I_NEED_A_NAME",
          parameters: commandParams?.eventParams
        }
      });
      return;
    }
    dispatch(finishIsLoading());
    if (commandParams.hasOwnProperty("screenName") && !['PressBackButton'].includes(commandName))
      processAssistantParams(dispatch, commandParams);
    processAssistantCommand(dispatch, commandName, getState, commandParams);
  });
};
