import type { RootState } from '../index';

export const selectAgentsList = (state: RootState) => state.agents.list;
export const selectAgentsReady = (state: RootState) => state.agents.ready;