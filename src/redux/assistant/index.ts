/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import { initialize } from '../../api/connection';
import testData from '../../testData/main.json';
import {AssistantSliceState, CommandParams, SmartAppResponseType} from './types'
// import { RuleSet } from 'styled-components';
import { AppDispatch, RootState } from '..';
import {setData as setYourLocationPage} from '../yourLocationPage'
import {setData as setFirstStoriesPage} from '../firstStoriesPage'
import {setData as setSelectionMethod} from '../selectionMethodPage'
import { StartConfirmationPageSliceState } from '../firstStoriesPage/types';
import { YourLocationPageSliceState } from '../yourLocationPage/types';
export * from './selectors';
import {
  turnOffMicrophone,
  turnOffSound,
  turnOnMicrophone,
  turnOnSound,
} from '../utilsCommandName';
import { selectionMethodPageSliceState } from '../selectionMethodPage/types';

let assistant: any = null;

const initialState: AssistantSliceState = {
  page: '',
  isLoading: true,
  errorInfo: null,
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
    }
  },
});

export const {
  sendData,
  finishIsLoading,
  startIsLoading,
  setPage,
  close,
  setErrorInfo
} = assistantSlice.actions;
export default assistantSlice.reducer;

const processAssistantParams = (dispatch : AppDispatch, commandParams : CommandParams) => {
  const screenName = commandParams.screenName
  const data = commandParams.data;

  let page = '';
  switch (screenName) {
    case 'FirstStories':
      page = '/firstStories';
      console.log(data)
      dispatch(setFirstStoriesPage(data as StartConfirmationPageSliceState))
      break;
    case 'SecondPage':
      page = '/SecondPage';
      console.log(data);
      // dispatch()
      break;
    case 'CityChoose':
      page = '/cityChoose';
      dispatch(setYourLocationPage(data as YourLocationPageSliceState))
      break;
    case 'SelectionMethod':
      page = '/selectionMethod';
      dispatch(setSelectionMethod(data as selectionMethodPageSliceState ));
      break;


  }

  dispatch(setPage({ page }));
};


const processAssistantCommand = (dispatch : AppDispatch, commandName : string, getState : RootState) => {
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
    default:
      break;
  }
};

// должно вызываться только один раз и только в одном месте, сейчас в layout
export const initAssistant = () => (dispatch : AppDispatch, getState : RootState) => {
  // @ts-ignore
  assistant = initialize(() => null);

  // eslint-disable-next-line no-undef
  if (process.env.REACT_APP_BUILD === 'test') {
    const { commandParams, commandName } = testData.smart_app_data;
    dispatch(finishIsLoading());
    processAssistantParams(dispatch, { ...commandParams });
    processAssistantCommand(dispatch, commandName, getState);
    return;
  }

  assistant.on('data', (response : SmartAppResponseType) => {
    // dispatch(setErrorInfo(response));
    const data =
      // response;
      // eslint-disable-next-line no-undefined
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
    processAssistantCommand(dispatch, commandName, getState);
  });
};
