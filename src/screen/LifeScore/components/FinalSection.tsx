import React from 'react';
import { Box, Typography, TextField, InputAdornment, Paper } from '@mui/material';
import { styles } from '../styles';

export type FinalSectionProps = {
  finalScore: number; // 0-100
  fixedPay: number;
  variablePay: number;
  onFixedPayChange: (v: number) => void;
  onVariablePayChange: (v: number) => void;
};

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });

export const FinalSection: React.FC<FinalSectionProps> = ({ finalScore, fixedPay, variablePay, onFixedPayChange, onVariablePayChange }) => {
  const finalAmount = fixedPay + (variablePay * (finalScore / 100));

  return (
    <>
      <Box sx={styles.finalScoreBar}>
        Final Commission Score: {Math.round(finalScore)} / 100
      </Box>

      <Box sx={styles.payGrid}>
        <TextField
          label="Fixed Pay"
          type="number"
          value={fixedPay}
          onChange={(e) => onFixedPayChange(Number(e.target.value))}
          InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment> }}
          fullWidth
        />
        <TextField
          label="Variable Pay"
          type="number"
          value={variablePay}
          onChange={(e) => onVariablePayChange(Number(e.target.value))}
          InputProps={{ startAdornment: <InputAdornment position="start">₹</InputAdornment> }}
          fullWidth
        />
      </Box>

      <Paper elevation={0} sx={styles.calcCard}>
        <Typography variant="body2" color="text.secondary">
          Final Pay = Fixed Pay + (Variable Pay × Pay Score)
        </Typography>
        <Typography variant="caption" color="text.secondary" display="block" mt={0.5}>
          {inr.format(fixedPay)} + ({inr.format(variablePay)} × {Math.round(finalScore) / 100})
        </Typography>

        <Box mt={2} display="flex" justifyContent="flex-end">
          <Box sx={styles.amountPill}>{inr.format(finalAmount)}</Box>
        </Box>
      </Paper>
    </>
  );
};
