import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  ready: boolean;
}

const initialState: AppState = {
  ready: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setReady(state: AppState, action: PayloadAction<boolean>) {
      state.ready = action.payload;
    },
  },
});

export const { setReady } = appSlice.actions;
export default appSlice.reducer;
