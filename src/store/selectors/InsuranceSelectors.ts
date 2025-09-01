// src/store/selectors/lifeScoreSelectors.ts
import { SCORE_META } from '../../screen/LifeScore/constants';
import { RootState } from '../index';

export const selectLifeScoreState = (state: RootState) => state.insurance.lifeScore;

export const selectScores = (state: RootState) => selectLifeScoreState(state).scores;
export const selectWeights = (state: RootState) => selectLifeScoreState(state).weights;
export const selectFixedPay = (state: RootState) => selectLifeScoreState(state).fixedPay;
export const selectVariablePay = (state: RootState) => selectLifeScoreState(state).variablePay;

export const selectFinalScore = (state: RootState) => {
  const scores = selectScores(state);
  const weights = selectWeights(state);
  
  const entries = Object.entries(scores) as [keyof typeof scores, number][];
  let weightedSum = 0;
  let totalWeight = 0;
  
  entries.forEach(([key, value]) => {
    const meta = SCORE_META.find((m) => m.key === key);
    console.log(meta);
    let w = 0;
    if(meta?.isPositive)
    {
    w = weights[key];}
    else
    {
    w = -1*weights[key];
  }
    weightedSum += value * w;
    totalWeight += w;
  });
  
  return weightedSum;
};