import { Box, TextField, FormControl, Typography, RadioGroup, FormControlLabel, Radio, InputAdornment } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WcIcon from '@mui/icons-material/Wc';
import { styles } from '../styles';
import { FormData, SetField } from '../types';

interface Props {
  form: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  set: SetField;
}

export const AgeGenderSection = ({ form, errors, set }: Props) => {
  return (
    <>
      <Box>
        <TextField
          fullWidth
          label="Age"
          placeholder="Enter age (18-100)"
          value={form.age}
          onChange={(e) => set('age', e.target.value)}
          type="number"
          error={!!errors.age}
          helperText={errors.age}
          InputProps={{ 
            startAdornment: (
              <InputAdornment position="start">
                <CalendarMonthIcon color={errors.age ? 'error' : 'inherit'} />
              </InputAdornment>
            )
          }}
        />
      </Box>

      <Box>
        <FormControl>
          <Typography variant="subtitle2" color="text.secondary" sx={styles.genderLabel}>
            <WcIcon fontSize="small" /> Gender
          </Typography>
          <RadioGroup row value={form.gender} onChange={(e) => set('gender', e.target.value as 'male' | 'female')}>
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};
