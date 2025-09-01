import { ApiInsuranceRequest, FormData } from './types';

export const initialFormData: FormData = {
  insuranceType: 'Life Insurance',
  age: '',
  gender: 'male',
  occupation: '',
  education: '',
  state: '',
  relation: '',
  creditScore: '',
  conditions: [],
  hasAddon: 'no',
  isEmi: 'no',
  hasClaims: 'no',
};

export const FORM_FIELD_MAPPING:ApiInsuranceRequest={
    insuranceType:'insuranceType',
    age:'age',
    gender:'gender',
    state:'state',
    conditions:'preexisting_conditions',
    hasAddon:'has_addon',
    isEmi:'is_emi_payment',
    relation:'nominee_relation',
    hasClaims:'has_previous_claims',
    creditScore:'credit_score',
    occupation:'occupation',
    education:'education'
    
}

export const API_ENDPOINTS_MAP={
  "Health Insurance":"getHealthScore",
  "Life Insurance":"getLifeScore",
  "Motor Insurance":"getMotorScore"
}
