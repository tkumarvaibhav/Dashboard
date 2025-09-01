import { Box, Paper, Slider, Typography, CircularProgress } from '@mui/material';
import React from 'react';
import { MuiColor } from '../types';
import { styles } from '../styles';

export type ScoreCardProps = {
  label: string;
  value: number; // 0-100
  weight: number; // 0-1 step 0.1
  color?: MuiColor;
  onChangeValue?: (v: number) => void;
  onChangeWeight?: (v: number) => void;
};

export const ScoreCard: React.FC<ScoreCardProps> = ({
  label,
  value,
  weight,
  color = 'primary',
  onChangeValue,
  onChangeWeight,
}) => {
  return (
    <Paper elevation={1} sx={styles.scoreCard}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
        <Typography variant="subtitle1" fontWeight={600}>
          {label}
        </Typography>
      </Box>

      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={100} size={80} sx={{ color: 'grey.200' }} />
        <CircularProgress
          variant="determinate"
          value={Math.min(100, Math.max(0, value))}
          size={80}
          sx={{ position: 'absolute', left: 0, color: `${color}.main` }}
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box textAlign="center">
            <Typography variant="h6" component="div" color="text.primary">
              {Math.round(value)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              / 100
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box mt={2}>
        <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
          Weight: {weight}
        </Typography>
        <Slider
          value={weight}
          min={0}
          max={1}
          step={0.1}
          valueLabelDisplay="auto"
          sx={{ color: `${color}.main` }}
          onChange={(_, v) => onChangeWeight?.(v as number)}
        />
      </Box>

      {onChangeValue && (
        <Box mt={1}>
          <Typography variant="caption" color="text.secondary" display="block" mb={0.5}>
            Adjust score
          </Typography>
          <Slider
            value={value}
            min={0}
            max={100}
            step={1}
            valueLabelDisplay="auto"
            sx={{ color: `${color}.main` }}
            onChange={(_, v) => onChangeValue?.(v as number)}
          />
        </Box>
      )}
    </Paper>
  );
};
