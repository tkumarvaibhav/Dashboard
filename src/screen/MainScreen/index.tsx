import { Container, Box } from '@mui/material';
import InsurancePanel from '../Insurance/InsurancePanel';
import LifeScorePanel from '../LifeScore/LifeScorePanel';

export default function MainScreen() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 2, md: 3 },
            alignItems: 'stretch',
            minWidth: 0,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <InsurancePanel />
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <LifeScorePanel />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}