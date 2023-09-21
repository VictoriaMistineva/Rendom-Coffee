import { configureStore, combineReducers } from '@reduxjs/toolkit';
import app from './app';
import assistant from './assistant';
import mainPage from './mainPage';
import secondPage from './secondPage';
import YourLocationPage from './yourLocationPage';


const rootReducer = combineReducers({
    app,
    assistant,
    mainPage,
    secondPage,
    YourLocationPage,
});

const store = configureStore({
    reducer: rootReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;