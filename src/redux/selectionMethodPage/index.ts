import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { selectionMethodPageSliceState } from './types'
export * from './selectors';


const initialState: selectionMethodPageSliceState = {
    methods: []
}

const selectionMethodSlice = createSlice({
    name: 'selectionMethod',
    initialState: initialState,
    reducers: {
        setData(state, action: PayloadAction<selectionMethodPageSliceState>) {
            state.methods = action.payload.methods ?? [];
        }
    },
});

export default selectionMethodSlice.reducer;
export const {
    setData,
} = selectionMethodSlice.actions;