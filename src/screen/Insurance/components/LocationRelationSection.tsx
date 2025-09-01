import { Box, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { styles } from '../styles';
import { FormData, SetField } from '../types';
import { states, nomineeRelation } from '../../../constants';
import MapIcon from '@mui/icons-material/Map';
import Diversity3Icon from '@mui/icons-material/Diversity3';

interface Props {
  form: FormData;
  set: SetField;
}

export const LocationRelationSection = ({ form, set }: Props) => {
  return (
    <>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            label="State"
            value={form.state}
            onChange={(e) => set('state', e.target.value)}
            sx={styles.selectMinWidth}
            input={<OutlinedInput label="State" startAdornment={<InputAdornment position="start"><MapIcon /></InputAdornment>} />}
          >
            <MenuItem value="">Select State</MenuItem>
            {states.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box>
        <FormControl fullWidth>
          <InputLabel id="relation-label">Nominee Relation</InputLabel>
          <Select
            labelId="relation-label"
            label="Nominee Relation"
            value={form.relation}
            onChange={(e) => set('relation', e.target.value)}
            sx={styles.selectMinWidth}
            input={<OutlinedInput label="Nominee Relation" startAdornment={<InputAdornment position="start"><Diversity3Icon /></InputAdornment>} />}
          >
            <MenuItem value="">Select Relation</MenuItem>
            {nomineeRelation.map((opt) => (
              <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
