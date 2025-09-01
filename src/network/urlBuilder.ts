import { isEmpty } from "../utils/datautils";
import { apiEndpoints } from "./endpoints";

interface UrlParams {
  pathVariables?: Record<string, string | number>;
  queryParams?: Record<string, string | number | boolean>;
}

export const buildUrl = (endpoint: string, params: UrlParams = {}): string => {
  let url = apiEndpoints[endpoint as keyof typeof apiEndpoints] || '';
  
  // Handle path variables
  if (params.pathVariables) {
    Object.entries(params.pathVariables).forEach(([key, value]) => {
      url = url.replace(`{${key}}`, encodeURIComponent(String(value)));
    });
  }

  // Handle query parameters
  if (params.queryParams && !isEmpty(params.queryParams)) {
    const queryString = Object.entries(params.queryParams)
      .filter(([_, value]) => value !== undefined && value !== null && value !== '')
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&');
    
    if (queryString) {
      url += `?${queryString}`;
    }
  }

  return url;
};

export const buildQueryParams = (params: Record<string, any>): string => {
  const queryString = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
    .join('&');
  
  return queryString ? `?${queryString}` : '';
};