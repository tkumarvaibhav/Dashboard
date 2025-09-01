import { MetricKey, Agent } from './types';

export const METRIC_META: Array<{
  key: MetricKey;
  label: string;
  color: 'primary' | 'warning' | 'error' | 'success' | 'info';
}> = [
  { key: 'creditReliability', label: 'Credit Reliability', color: 'primary' },
  { key: 'customerLoyalty', label: 'Customer Loyalty Score', color: 'info' },
  { key: 'accidentRisk', label: 'Accident Risk', color: 'warning' },
  { key: 'claimSeverity', label: 'Claim Severity', color: 'warning' },
  { key: 'coverageAdequacy', label: 'Coverage Adequacy Score', color: 'primary' },
  { key: 'claimRatio', label: 'Claim Ratio', color: 'error' },
  { key: 'grievanceRatio', label: 'Grievance Ratio', color: 'info' },
  { key: 'agentRetention', label: 'Agent Retention', color: 'success' },
];

export const AGENTS: Agent[] = [
  {
    id: 'a1',
    name: 'Priya Sharma',
    role: 'Insurance Agent',
    color: '#1976d2',
    metrics: {
      creditReliability: {value:82,isInc:true},
      customerLoyalty: {value:85,isInc:true},
      accidentRisk: {value:25,isInc:false},
      claimSeverity: {value:55,isInc:false},
      coverageAdequacy: {value:90,isInc:true},
      claimRatio: {value:30,isInc:false},
      grievanceRatio: {value:36,isInc:false},
      agentRetention: {value:81,isInc:true},
    },
    roiPerCustomer: 756,
  },
  {
    id: 'a2',
    name: 'Rohan Verma',
    role: 'Insurance Agent',
    color: '#7b1fa2',
    metrics: {
      creditReliability: {value:68,isInc:false},
      customerLoyalty: {value:55,isInc:false},
      accidentRisk: {value:45,isInc:false},
      claimSeverity: {value:50,isInc:false},
      coverageAdequacy: {value:70,isInc:true},
      claimRatio: {value:60,isInc:false},
      grievanceRatio: {value:45,isInc:false},
      agentRetention  : {value:57,isInc:true},
    },
    roiPerCustomer: 660,
  },
];
