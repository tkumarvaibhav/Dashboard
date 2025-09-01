import { configureStore } from '@reduxjs/toolkit';
import app from './slices/appSlice';
import insurance from './slices/InsuranceSlice';

export const store = configureStore({
  reducer: {
    app,
    insurance,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
