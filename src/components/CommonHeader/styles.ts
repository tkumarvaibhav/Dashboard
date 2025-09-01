import { SxProps, Theme } from '@mui/material/styles';

export const headerStyles = {
  appBar: {
    backdropFilter: 'blur(6px)',
    borderBottom: '1px solid',
    borderColor: 'divider',
    backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))',
  } as SxProps<Theme>,

  toolbar: {
    py: { xs: 0.5, md: 1 },
    gap: { xs: 1, md: 2 },
    flexWrap: 'wrap',
  } as SxProps<Theme>,

  tabs: {
    minHeight: { xs: 40, md: 48 },
    width: { xs: '100%', md: 'auto' },
    ml: { md: 2 },
    mt: { xs: 1, md: 0 },
  } as SxProps<Theme>,

  tab: {
    minHeight: { xs: 40, md: 48 },
    px: { xs: 1.5, md: 2.5 },
    fontSize: { xs: 12, md: 14 },
  } as SxProps<Theme>,
};
