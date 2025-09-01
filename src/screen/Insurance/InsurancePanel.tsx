import { useState, useCallback } from 'react';
import { Box, Paper } from '@mui/material';
import { Header } from './components/Header';
import { TopSection } from './components/TopSection';
import { AgeGenderSection } from './components/AgeGenderSection';
import { SelectsSection } from './components/SelectsSection';
import { LocationRelationSection } from './components/LocationRelationSection';
import { CreditAndConditionsSection } from './components/CreditAndConditionsSection';
import { TogglesSection } from './components/TogglesSection';
import { SubmitSection } from './components/SubmitSection';

import { FormData } from './types';
import { FORM_FIELD_MAPPING, initialFormData } from './constants';
import { styles } from './styles';
import { calculateScore } from '../../store/service/InsuranceService';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
    // Types
export default function InsurancePanel() {
  const dispatch=useDispatch<AppDispatch>();

  const [form, setForm] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  /**
   * Updates form field value
   */
  const set = useCallback(<K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    console.log(field, value);
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  }, [errors]);

  /**
   * Validates form fields
   */
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(form.age)) || Number(form.age) < 18 || Number(form.age) > 100) {
      newErrors.age = 'Age must be between 18 and 100';
    }

    if (form.creditScore && (isNaN(Number(form.creditScore)) || Number(form.creditScore) < 300 || Number(form.creditScore) > 850)) {
      newErrors.creditScore = 'Credit score must be between 300 and 850';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles form submission
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const apiRequest = (Object.keys(form) as Array<keyof FormData>).reduce((acc, key) => {
        const mappedKey = FORM_FIELD_MAPPING[key];
        if (mappedKey) {
          return { ...acc, [mappedKey]: form[key] };
        }
        return acc;
      }, {} as Record<string, any>);
      dispatch(calculateScore({reqBody:apiRequest,type:form.insuranceType as string}));
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={styles.formContainer}>
      <Header sx={styles.formSection} />

      <Paper elevation={0} sx={styles.paper}>
        <Box sx={styles.sectionGrid}>
          <TopSection form={form} errors={errors} set={set} />
          <AgeGenderSection form={form} errors={errors} set={set} />
          <SelectsSection form={form} set={set} />
          <LocationRelationSection form={form} set={set} />
          <CreditAndConditionsSection form={form} errors={errors} set={set} />
          <TogglesSection form={form} set={set} />
          <SubmitSection />
        </Box>
      </Paper>
    </Box>
  )
}
