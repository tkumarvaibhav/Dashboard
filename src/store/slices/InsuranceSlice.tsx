// src/store/slices/InsuranceSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialScores, initialWeights, ScoreValues, ScoreWeights } from '../../screen/LifeScore/constants';

interface InsuranceState {
  ready: boolean;
  lifeScore: {
    scores: ScoreValues;
    weights: ScoreWeights;
    fixedPay: number;
    variablePay: number;
  };
}

const initialState: InsuranceState = {
  ready: true,
  lifeScore: {
    scores: initialScores,
    weights: initialWeights,
    fixedPay: 1000,
    variablePay: 100,
  },
};

const insuranceSlice = createSlice({
  name: 'insurance',
  initialState,
  reducers: {
    setReady(state, action: PayloadAction<boolean>) {
      state.ready = action.payload;
    },
    updateScore(
      state,
      action: PayloadAction<ScoreValues>
    ) {
      state.lifeScore.scores = action.payload;
    },
    updateWeight(
      state,
      action: PayloadAction<ScoreWeights>
    ) {
      state.lifeScore.weights = action.payload;
    },
    updateFixedPay(state, action: PayloadAction<number>) {
      state.lifeScore.fixedPay = action.payload;
    },
    updateVariablePay(state, action: PayloadAction<number>) {
      state.lifeScore.variablePay = action.payload;
    },
  },
});

export const {
  setReady,
  updateScore,
  updateWeight,
  updateFixedPay,
  updateVariablePay,
} = insuranceSlice.actions;

export default insuranceSlice.reducer;