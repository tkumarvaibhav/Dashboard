import { Box, Button, Divider } from '@mui/material';
import { styles } from '../styles';

interface Props {
  onSubmit?: () => void;
}

export const SubmitSection = (_props: Props) => {
  return (
    <Box sx={{ gridColumn: '1 / -1' }}>
      <Divider sx={styles.divider} />
      <Button
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={styles.submitButton}
      >
        Calculate Life Score
      </Button>
      <Box sx={styles.tagsContainer}>
        <Box component="span" sx={{ ...(styles.tagBase as any), ...(styles.mlTag as any) }}>Deep ML Models</Box>
        <Box component="span" sx={{ ...(styles.tagBase as any), ...(styles.analyticsTag as any) }}>Multi-Level Analytics</Box>
        <Box component="span" sx={{ ...(styles.tagBase as any), ...(styles.dynamicTag as any) }}>Dynamic Modelling</Box>
      </Box>
    </Box>
  );
}
