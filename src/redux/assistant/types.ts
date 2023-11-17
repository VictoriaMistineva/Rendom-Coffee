export type AssistantSliceState = {
    page: string,
    isLoading: boolean,
    errorInfo: null | string | number,
}

export type SmartAppResponseType = {
    type: "smart_app_data",
    smart_app_data: {
        commandName: string,
        commandParams: CommandParams,
    }
}

export type CommandParams = {
    data?: object | AlertPopUp,
    screenName?: string,
    eventName?: string,
    eventParams?: object
}

export type AlertPopUp = {
    title?: string,
    subtitle?: string
}