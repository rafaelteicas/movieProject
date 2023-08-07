import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import movieReducer from './reducers/movieReducer';

export const store = configureStore({
    reducer: {
        userReducer,
        movieReducer
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store