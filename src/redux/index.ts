import { configureStore, combineReducers } from '@reduxjs/toolkit';
import app from './app';
import assistant from './assistant';
import utilsCommandName from './utilsCommandName';
import secondPage from './secondPage';
import yourLocationPage from './yourLocationPage';
import startConfirmation from './firstStoriesPage';
import selectionMethod from './selectionMethodPage';
import bubblesImage from './bubblesImage'
import smallUserCard from './smallUserCard'
import meetInfo from './meetInfo';
import changeMeetingPlace from './changeMeetingPlace';
const rootReducer = combineReducers({
    app,
    assistant,
    utilsCommandName,
    secondPage,
    yourLocationPage,
    startConfirmation,
    selectionMethod,
    bubblesImage,
    smallUserCard,
    meetInfo,
    changeMeetingPlace
});

const store = configureStore({
    reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;