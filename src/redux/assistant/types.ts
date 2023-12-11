export type AssistantSliceState = {
    page: string,
    isLoading: boolean,
    errorInfo: null | string | number,
    isMobile: boolean,
}

export type SmartAppResponseType = {
    type: "smart_app_data",
    smart_app_data: {
        commandName: string,
        commandParams: CommandParams,
    }
}

export type CommandParams = {
    data?: object | AlertPopUp,  // в processAssistantParams 
    screenName?: string,
    eventName?: string,
    eventParams?: object
}

export type AlertPopUp = {
    title?: string,
    subtitle?: string
}