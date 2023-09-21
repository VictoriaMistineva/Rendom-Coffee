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
    data: any,
    screenName?: string,
}