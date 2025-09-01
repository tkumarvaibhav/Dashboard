import { configureStore } from '@reduxjs/toolkit';
import app from './slices/appSlice';
import insurance from './slices/InsuranceSlice';
import agents from './slices/AgentSlice'; // add this

export const store = configureStore({
  reducer: {
    app,
    insurance,
    agents, // add this
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;