import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { styles } from '../styles';
import { FormData, SetField } from '../types';
import { occupation as occupationOptions, educationLevels } from '../../../constants';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

interface Props {
  form: FormData;
  set: SetField;
}

export const SelectsSection = ({ form, set }: Props) => {
  return (
    <>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="occupation-label">Occupation</InputLabel>
          <Select
            labelId="occupation-label"
            label="Occupation"
            value={form.occupation}
            onChange={(e) => set('occupation', e.target.value)}
            sx={styles.selectMinWidth}
            input={<OutlinedInput label="Occupation" startAdornment={<InputAdornment position="start"><WorkIcon /></InputAdornment>} />}
          >
            <MenuItem value="">Select Occupation</MenuItem>
            {occupationOptions.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box>
        <FormControl fullWidth>
          <InputLabel id="education-label">Education Level</InputLabel>
          <Select
            labelId="education-label"
            label="Education Level"
            value={form.education}
            onChange={(e) => set('education', e.target.value)}
            sx={styles.selectMinWidth}
            input={<OutlinedInput label="Education Level" startAdornment={<InputAdornment position="start"><SchoolIcon /></InputAdornment>} />}
          >
            {educationLevels.map((level) => (
              <MenuItem key={level.value} value={level.value}>
                {level.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
