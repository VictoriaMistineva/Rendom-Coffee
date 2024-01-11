import { configureStore, combineReducers } from '@reduxjs/toolkit';
import app from './app';
import assistant from './assistant';
import utilsCommandName from './utilsCommandName';
import secondPage from './secondPage';
import startConfirmation from './firstStoriesPage';
import selectionMethod from './selectionMethodPage';
import bubblesImage from './bubblesImage'
import smallUserCard from './smallUserCard'
import changeMeetingPlace from './changeMeetingPlace';
import userRegistration from './userRegistration';
import determineWinner from './determineWinner';
import winner from './winner';
const rootReducer = combineReducers({
    app,
    assistant,
    utilsCommandName,
    secondPage,
    startConfirmation,
    selectionMethod,
    bubblesImage,
    smallUserCard,
    changeMeetingPlace,
    userRegistration,
    determineWinner,
    winner,
});

const store = configureStore({
    reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;