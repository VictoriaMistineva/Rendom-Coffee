import { string } from "prop-types"

export type MainPageSliceState = {
    commandName: string;
    items: any,
    isMicrophoneOff: boolean,
    isSoundOff: boolean,
    actionPopup: ActionPopUp,
}
export type ActionPopUp = {
    isOpen: boolean,
    status: string,
    textItems: string[],
    buttonText: string,

}