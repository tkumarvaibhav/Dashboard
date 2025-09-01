import { SxProps, Theme } from '@mui/material';

export const styles = {
  container: {
    mx: 'auto',
    px: 2,
  } as SxProps<Theme>,

  paper: {
    p: { xs: 3, sm: 4 },
    borderRadius: 2,
    width: { xs: '100%', sm: '100%', md: '100%' },
    maxWidth: 1200,
    ml: 0,
    mr: 'auto',
  } as SxProps<Theme>,

  grid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr' },
    gap: 2,
  } as SxProps<Theme>,

  scoreCard: {
    p: 2,
    borderRadius: 2,
  } as SxProps<Theme>,

  headerSpacer: {
    mb: 3,
  } as SxProps<Theme>,

  finalScoreBar: {
    mt: 3,
    mb: 2,
    px: 2,
    py: 1.5,
    borderRadius: 1.5,
    backgroundColor: 'warning.light',
    color: '#04120a',
    fontWeight: 700,
  } as SxProps<Theme>,

  payGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: 2,
    mt: 2,
  } as SxProps<Theme>,

  calcCard: {
    mt: 2,
    p: 2,
    borderRadius: 2,
    backgroundColor: 'grey.50',
  } as SxProps<Theme>,

  amountPill: {
    px: 2.5,
    py: 1,
    borderRadius: 2,
    backgroundColor: 'warning.main',
    color: 'common.white',
    fontWeight: 700,
    display: 'inline-block',
  } as SxProps<Theme>,
};
