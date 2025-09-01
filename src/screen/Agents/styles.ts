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
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: { xs: 2, md: 3 },
  } as SxProps<Theme>,

  card: {
    p: { xs: 2, md: 2.5 },
    borderRadius: 2,
  } as SxProps<Theme>,

  avatar: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    color: 'common.white',
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as SxProps<Theme>,

  metricBar: {
    height: 8,
    borderRadius: 999,
  } as SxProps<Theme>,

  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontWeight: 700,
    color: 'text.secondary',
    mt: 1,
    mb: 1,
  } as SxProps<Theme>,
};
