import { ScoreKey, ScoreMeta } from './types';

export const SCORE_META: ScoreMeta[] = [
  { key: 'customerLoyaltyScore', label: 'Customer Loyalty Score', color: 'primary',isPositive:true },
  { key: 'paymentHistoryScore', label: 'Payment History Score', color: 'success',isPositive:false },
  { key: 'coverageAdequacyScore', label: 'Coverage Adequacy Score', color: 'info',isPositive:false },
  { key: 'riskAffinity', label: 'Risk Affinity', color: 'error',isPositive:false },
  { key: 'claimSeverity', label: 'Claim Severity', color: 'warning',isPositive:false },
  { key: 'claimInflationScore', label: 'Claim Inflation Score', color: 'secondary',isPositive:false },
  { key: 'customerSpending', label: 'Customer Spending', color: 'warning',isPositive:true },
  { key: 'creditReliability', label: 'Credit Reliability', color: 'info' ,isPositive:false },
  { key: 'accidentRisk', label: 'Accident Risk', color: 'error',isPositive:false },
  { key: 'lifestyleScore', label: 'Lifestyle Score', color: 'warning',isPositive:false },
  { key: 'chronicConditionScore', label: 'Chronic Condition Score', color: 'primary',isPositive:true },
];

export type ScoreValues = Record<ScoreKey, number>;
export type ScoreWeights = Record<ScoreKey, number>;

export const initialScores: ScoreValues = {
  customerLoyaltyScore: 75,
  paymentHistoryScore: 50,
  coverageAdequacyScore: 78,
  riskAffinity: 81,
  claimSeverity: 59,
  claimInflationScore: 62,
  customerSpending: 58,
  creditReliability: 50,
  accidentRisk: 50,
  lifestyleScore: 42,
  chronicConditionScore: 15,
};

export const initialWeights: ScoreWeights = {
  customerLoyaltyScore: 0.7,
  paymentHistoryScore: 0.5,
  coverageAdequacyScore: 1.0,
  riskAffinity: 1.0,
  claimSeverity: 0.6,
  claimInflationScore: 0.4,
  customerSpending: 0.2,
  creditReliability: 0.5,
  accidentRisk: 0.8,
  lifestyleScore: 0.5,
  chronicConditionScore: 1.0,
};
