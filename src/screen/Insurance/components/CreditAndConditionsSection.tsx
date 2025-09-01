import { Box, TextField, FormControl, InputLabel, OutlinedInput, Select, MenuItem, InputAdornment, Chip } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { styles } from '../styles';
import { FormData, SetField } from '../types';
import { preexistingConditions } from '../../../constants';

interface Props {
  form: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  set: SetField;
}

export const CreditAndConditionsSection = ({ form, errors, set }: Props) => {
  return (
    <>
      <Box>
        <TextField
          fullWidth
          label="Credit Score (300-850)"
          placeholder="Enter score (300-850)"
          value={form.creditScore}
          onChange={(e) => set('creditScore', e.target.value)}
          type="number"
          error={!!errors.creditScore}
          helperText={errors.creditScore}
          InputProps={{ 
            startAdornment: (
              <InputAdornment position="start">
                <CreditScoreIcon color={errors.creditScore ? 'error' : 'inherit'} />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box sx={{ gridColumn: '1 / -1' }}>
        <FormControl fullWidth>
          <InputLabel id="conditions-label">Preexisting Conditions</InputLabel>
          <Select
            labelId="conditions-label"
            label="Preexisting Conditions"
            multiple
            value={form.conditions}
            onChange={(e) => set('conditions', e.target.value as string[])}
            input={<OutlinedInput 
              label="Preexisting Conditions" 
              startAdornment={
                <InputAdornment position="start">
                  <FavoriteBorderIcon />
                </InputAdornment>
              } 
            />}
            renderValue={(selected) => (
              <Box sx={styles.conditionsChipsContainer}>
                {(selected as string[]).map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    size="small"
                    sx={styles.conditionChip}
                    onMouseDown={(e) => {
                      e.stopPropagation();
                    }}
                    onDelete={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      e.preventDefault();
                      const newConditions = form.conditions.filter(item => item !== value);
                      set('conditions', newConditions);
                    }}
                  />
                ))}
              </Box>
            )}
            sx={styles.conditionsSelect}
            MenuProps={{
              PaperProps: {
                sx: styles.menuPaper,
              },
            }}
          >
            {preexistingConditions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
