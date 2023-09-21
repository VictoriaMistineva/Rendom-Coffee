import { RootState } from "../index";

export const getIsLoading = (state : RootState) => state.assistant.isLoading;
export const getPage = (state : RootState) => state.assistant.page;
export const getErrorInfo = (state : RootState) => state.assistant.errorInfo;


