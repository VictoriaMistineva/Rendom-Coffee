/* eslint-disable */
import {
    createAssistant,
    createSmartappDebugger,
    AssistantAppState
} from "@salutejs/client";

export function initialize(getState : () => AssistantAppState) {
    if (process.env.REACT_APP_BUILD === "dev") {
        return createSmartappDebugger({
            token: String(process.env.REACT_APP_ASSISTANT_TOKEN),
            initPhrase: "Запусти маракуя",
            getState: getState,
        });
    }
    return createAssistant({ getState });
};  