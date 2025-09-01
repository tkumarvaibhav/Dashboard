import { Box, FormControl, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { FormData, SetField } from '../types';

interface Props {
  form: FormData;
  set: SetField;
}

export const TogglesSection = ({ form, set }: Props) => {
  return (
    <Box sx={{ gridColumn: '1 / -1' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
        <Box>
          <FormControl>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>Has Addon</Typography>
            <RadioGroup row value={form.hasAddon} onChange={(e) => set('hasAddon', e.target.value as 'yes' | 'no')}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>Is EMI Payment</Typography>
            <RadioGroup row value={form.isEmi} onChange={(e) => set('isEmi', e.target.value as 'yes' | 'no')}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>Has Previous Claims</Typography>
          </FormControl>
          <RadioGroup row value={form.hasClaims} onChange={(e) => set('hasClaims', e.target.value as 'yes' | 'no')}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
}
