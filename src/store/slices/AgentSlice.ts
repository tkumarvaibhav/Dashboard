import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Agent } from '../../screen/Agents/types';
import { AGENTS } from '../../screen/Agents/constants';

type AgentsState = {
  ready: boolean;
  list: Agent[];
};

const initialState: AgentsState = {
  ready: true,
  list: AGENTS,
};

const agentsSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {
    setAgents(state, action: PayloadAction<Agent[]>) {
      state.list = action.payload;
    },
    setReady(state, action: PayloadAction<boolean>) {
      state.ready = action.payload;
    },
  },
});

export const { setAgents, setReady } = agentsSlice.actions;
export default agentsSlice.reducer;