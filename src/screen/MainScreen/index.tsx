import { Box } from '@mui/material';
import InsurancePanel from '../Insurance/InsurancePanel';
import LifeScorePanel from '../LifeScore/LifeScorePanel';

export default function MainScreen() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
        gap: { xs: 2, md: 3 },
        alignItems: 'stretch',
        minWidth: 0,
      }}
    >
      <Box
        id="section-insurance"
        sx={{ minWidth: 0, scrollMarginTop: { xs: 72, md: 88 } }}
      >
        <InsurancePanel />
      </Box>

      <Box
        id="section-lifescore"
        sx={{ minWidth: 0, scrollMarginTop: { xs: 72, md: 88 } }}
      >
        <LifeScorePanel />
      </Box>
    </Box>
  );
}