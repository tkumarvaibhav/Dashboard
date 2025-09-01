export type FormData = {
    insuranceType: string;
    age: string;
    gender: 'male' | 'female';
    occupation: string;
    education: '' | 'High School' | 'Bachelor\'s' | 'Master\'s' | 'PhD';
    state: string;
    relation: string;
    creditScore: string;
    conditions: string[];
    hasAddon: 'yes' | 'no';
    isEmi: 'yes' | 'no';
    hasClaims: 'yes' | 'no';
  };
export type ApiInsuranceRequest={
    insuranceType:string;
    age: string;
    gender: string;
    state: string;
    conditions: string;
    hasAddon: string;
    isEmi: string;
    relation: string;
    hasClaims: string;
    creditScore: string;
    occupation:string;
    education:string;
}
  
export type SetField = <K extends keyof FormData>(field: K, value: FormData[K]) => void;