const comissionApi = {
  "getLifeScore": "/get-life-score",
  "getHealthScore":"/get-health-score",
  "getMotorScore":"/get-motor-score"
}

export const apiEndpoints = {
  ...comissionApi
} as const;

export type EndpointKey = keyof typeof apiEndpoints;