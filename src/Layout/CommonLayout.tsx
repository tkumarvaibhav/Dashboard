import { useCallback, useState } from 'react';
import { Box, Container } from '@mui/material';
import { CommonHeader } from '../components/CommonHeader';
import type { CommonHeaderTabValue } from '../components/CommonHeader';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export default function CommonLayout({ children }: Props) {
  const [tab, setTab] = useState<CommonHeaderTabValue>('insurance');
  const navigate=useNavigate();

  const routeMap={
    "insurance":"/",
    "agents":"/agents"
  }

  const handleTabChange = useCallback((value: CommonHeaderTabValue) => {
    setTab(value);
    navigate(routeMap[value]);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <CommonHeader value={tab} onChange={handleTabChange} />
      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
        {children}
      </Container>
    </Box>
  );
}