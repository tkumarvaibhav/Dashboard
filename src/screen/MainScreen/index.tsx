import { Container, Box } from '@mui/material';
import { useRef, useCallback, useState } from 'react';
import { CommonHeader } from '../../components/CommonHeader';
import type { CommonHeaderTabValue } from '../../components/CommonHeader';
import InsurancePanel from '../Insurance/InsurancePanel';
import LifeScorePanel from '../LifeScore/LifeScorePanel';

export default function MainScreen() {
  const insuranceRef = useRef<HTMLDivElement | null>(null);
  const lifeScoreRef = useRef<HTMLDivElement | null>(null);
  const [tab, setTab] = useState<CommonHeaderTabValue>('insurance');

  const handleTabChange = useCallback((value: CommonHeaderTabValue) => {
    setTab(value);
    const el = value === 'insurance' ? insuranceRef.current : lifeScoreRef.current;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <CommonHeader value={tab} onChange={handleTabChange} />
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
          <Box ref={insuranceRef} sx={{ minWidth: 0, scrollMarginTop: { xs: 72, md: 88 } }}>
            <InsurancePanel />
          </Box>
          <Box ref={lifeScoreRef} sx={{ minWidth: 0, scrollMarginTop: { xs: 72, md: 88 } }}>
            <LifeScorePanel />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}