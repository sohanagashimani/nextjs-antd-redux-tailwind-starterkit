import { combineReducers, configureStore } from '@reduxjs/toolkit';

import counterSlice from './slices/counterSlice';

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
