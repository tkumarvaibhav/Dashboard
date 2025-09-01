import { Box, Typography } from '@mui/material';

export function Header() {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" fontWeight={800} sx={{ typography: { xs: 'h6', md: 'h5' } }}>
        Agent Performance Analysis
      </Typography>
    </Box>
  );
}
