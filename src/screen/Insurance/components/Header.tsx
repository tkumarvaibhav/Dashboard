import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

type HeaderProps = {
  sx?: SxProps<Theme>;
};

export const Header = ({ sx = {} }: HeaderProps) => {
  return (
    <Box component="div" sx={sx}>
      <Typography variant="h3" component="h1" gutterBottom>
        Commission{' '}
        <Box component="span" sx={{ color: 'primary.main' }}>
          Rational
        </Box>{' '}
        Reimagined
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Fill the details below to calculate an indicative life score.
      </Typography>
    </Box>
  );
};
