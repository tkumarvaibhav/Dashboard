export type MuiColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export type ScoreKey =
  | 'customerLoyaltyScore'
  | 'paymentHistoryScore'
  | 'coverageAdequacyScore'
  | 'riskAffinity'
  | 'claimSeverity'
  | 'claimInflationScore'
  | 'customerSpending'
  | 'creditReliability'
  | 'accidentRisk'
  | 'lifestyleScore'
  | 'chronicConditionScore';

export type ScoreMeta = {
  key: ScoreKey;
  label: string;
  color: MuiColor;
  isPositive?: boolean;
};
