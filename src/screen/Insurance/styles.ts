import { SxProps, Theme } from '@mui/material';

export const styles = {
  formContainer: {
    py: 6,
    mx: 'auto',
    px: 2,
  } as SxProps<Theme>,

  titleHighlight: {
    color: 'primary.main',
  } as SxProps<Theme>,

  paper: {
    p: { xs: 3, sm: 4 },
    borderRadius: 2,
    width: { xs: '100%', sm: '100%', md: '100%' },
    maxWidth: 600,
    ml: 0,
    mr: 'auto',
  } as SxProps<Theme>,

  sectionGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: 3,
  } as SxProps<Theme>,

  selectMinWidth: {
    minWidth: 200,
  } as SxProps<Theme>,

  genderLabel: {
    mb: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  } as SxProps<Theme>,

  conditionsSelect: {
    width: '100%',
  } as SxProps<Theme>,

  conditionsChipsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0.5,
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } as SxProps<Theme>,

  conditionChip: {
    backgroundColor: 'primary.light',
    color: 'primary.contrastText',
    '& .MuiChip-deleteIcon': {
      color: 'primary.contrastText',
      '&:hover': {
        color: 'rgba(255, 255, 255, 0.8)',
      },
    },
    '&:hover': {
      backgroundColor: 'primary.main',
    },
  } as SxProps<Theme>,

  menuPaper: {
    maxHeight: 300,
  } as SxProps<Theme>,

  submitButton: {
    fontWeight: 700,
    letterSpacing: 0.2,
    color: '#04120a',
    background: 'linear-gradient(90deg, #22c55e 0%, #10b981 100%)',
    boxShadow: '0 10px 25px rgba(16,185,129,0.25), inset 0 1px 0 rgba(255,255,255,0.25)',
  } as SxProps<Theme>,

  tagsContainer: {
    display: 'flex',
    gap: 1,
    mt: 2,
    flexWrap: 'wrap',
  } as SxProps<Theme>,

  tagBase: {
    px: 1.5,
    py: 0.5,
    borderRadius: 1,
    border: '1px solid',
    fontSize: '0.75rem',
    fontWeight: 500,
  } as SxProps<Theme>,

  mlTag: {
    borderColor: 'rgba(34, 197, 94, 0.2)',
    color: 'success.main',
  } as SxProps<Theme>,

  analyticsTag: {
    borderColor: 'rgba(99, 102, 241, 0.2)',
    color: 'primary.main',
  } as SxProps<Theme>,

  dynamicTag: {
    borderColor: 'rgba(168, 85, 247, 0.2)',
    color: 'secondary.main',
  } as SxProps<Theme>,

  formSection: {
    mb: 3,
  } as SxProps<Theme>,

  divider: {
    my: 1.5,
  } as SxProps<Theme>,
};