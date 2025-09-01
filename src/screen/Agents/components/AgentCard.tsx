import { Box, Divider, Paper, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { METRIC_META } from '../constants';
import { Agent } from '../types';
import { styles } from '../styles';

export function AgentCard({ agent }: { agent: Agent }) {
  const initials = agent.name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <Paper elevation={0} sx={styles.card}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ ...styles.avatar, bgcolor: agent.color }}>{initials}</Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="subtitle1" fontWeight={700} noWrap>
            {agent.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {agent.role}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Scores section */}
      <Box sx={styles.sectionTitle}>
        <Typography variant="subtitle2" fontWeight={700} color="text.secondary">
          Average Customer Scores
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
        {METRIC_META.map(({ key, label, color }) => {
          const value = agent.metrics[key].value;
          const isInc = agent.metrics[key].isInc;
          return (
            <Box key={key} sx={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" color="text.secondary" noWrap>
                {label}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
              >
                {value}
                {isInc ? (
                  <ArrowUpwardIcon fontSize="inherit" sx={{ color: 'success.main' }} />
                ) : (
                  <ArrowDownwardIcon fontSize="inherit" sx={{ color: 'warning.main' }} />
                )}
              </Typography>
              <Box sx={{ gridColumn: '1 / span 2' }}>
                <Box sx={{ width: '100%', bgcolor: 'grey.200', borderRadius: 999 }}>
                  <Box
                    sx={{
                      ...styles.metricBar,
                      width: `${value}%`,
                      bgcolor: `${color}.main`,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* ROI */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          ROI Per Customer
        </Typography>
        <Typography variant="subtitle2" color="warning.main" fontWeight={700}>
          Rs. {agent.roiPerCustomer}
        </Typography>
      </Box>
    </Paper>
  );
}
