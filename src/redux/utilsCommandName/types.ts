import { string } from "prop-types"

export type UtilsCommandNameSliceState = {
    commandName: string;
    items: any,
    isMicrophoneOff: boolean,
    isSoundOff: boolean,
    alertPopup: AlertPopup,
    actionPopup: ActionPopUp,
}
export type ActionPopUp = {
    isOpen: boolean,
    status: string,
    textItems: string[],
    buttonText: string,

}

export type AlertPopup = {
    isShow: boolean,
    title: string,
    subTitle: string,
    list: string[],
}