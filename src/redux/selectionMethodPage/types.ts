
export type selectionMethodPageSliceState = {
    "methods": Array<methodsType>
}

export type methodsType = {
    "title": string,
    "canUse": boolean,
    "selected": boolean,
    "description": string,
}