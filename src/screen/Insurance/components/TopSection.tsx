import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { styles } from '../styles';
import { FormData, SetField } from '../types';
import { insuranceTypes } from '../../../constants';
import WorkIcon from '@mui/icons-material/Work';

interface Props {
  form: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  set: SetField;
}

export const TopSection = ({ form, set }: Props) => {
  return (
    <Box >
      <FormControl fullWidth>
        <InputLabel id="insurance-type-label">Insurance Type</InputLabel>
        <Select
          labelId="insurance-type-label"
          label="Insurance Type"
          value={form.insuranceType}
          onChange={(e) => set('insuranceType', e.target.value)}
          sx={styles.selectMinWidth}
          input={<OutlinedInput label="Insurance Type" startAdornment={<InputAdornment position="start"><WorkIcon /></InputAdornment>} />}
        >
          {insuranceTypes.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
