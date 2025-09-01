import { Box, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

type HeaderProps = {
  sx?: SxProps<Theme>;
  finalScore?: number;
};

export const Header = ({ sx = {}, finalScore }: HeaderProps) => {
  return (
    <Box component="div" sx={sx}>
      <Typography variant="h3" component="h1" gutterBottom>
        LifeScore
        <Box component="span" sx={{ color: 'primary.main' }}> Dashboard</Box>
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Adjust the weights to see how the final commission score changes.
      </Typography>
      {typeof finalScore === 'number' && (
        <Typography variant="subtitle1" mt={1}>
          Final Commission Score: <b>{Math.round(finalScore)}</b> / 100
        </Typography>
      )}
    </Box>
  );
};
