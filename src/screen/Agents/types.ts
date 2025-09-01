export type MetricKey =
  | 'creditReliability'
  | 'customerLoyalty'
  | 'accidentRisk'
  | 'claimSeverity'
  | 'coverageAdequacy'
  | 'claimRatio'
  | 'grievanceRatio'
  | 'agentRetention';

export type Metrics = Record<MetricKey, {value:number,isInc:boolean}>;

export type Agent = {
  id: string;
  name: string;
  role: string;
  color: string; // avatar background color
  metrics: Metrics;
  roiPerCustomer: number; // currency value
};
