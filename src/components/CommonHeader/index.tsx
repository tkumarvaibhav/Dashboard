import { AppBar, Toolbar, Tabs, Tab, Box, Typography, Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { CommonHeaderProps, CommonHeaderTabValue } from './types';
import { headerStyles } from './styles';

/**
 * Reusable top header with two tabs, following the app's current theme.
 * - Two tabs: Insurance, LifeScore
 * - Sticky by default with subtle blur and divider
 */
export default function CommonHeader({
  titleLeft = (
    <>
      <Typography
        variant="h5"
        component="span"
        fontWeight={800}
        sx={{ mr: 1, typography: { xs: 'h6', md: 'h5' } }}
      >
        FinLead
      </Typography>
      <Typography
        variant="h5"
        component="span"
        fontWeight={800}
        color="primary.main"
        sx={{ typography: { xs: 'h6', md: 'h5' } }}
      >
        AI
      </Typography>
    </>
  ),
  subtitle = (
    <Typography variant="body2" color="text.secondary" sx={{ typography: { xs: 'caption', md: 'body2' } }}>
        Intelligent Commission Scoring
    </Typography>
  ),
  value,
  onChange,
  sticky = true,
}: CommonHeaderProps) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar
      position={sticky ? 'sticky' : 'static'}
      color="transparent"
      elevation={0}
      sx={headerStyles.appBar}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={headerStyles.toolbar}>
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Box component="div">
              {titleLeft}
            </Box>
            <Box component="div">{subtitle}</Box>
          </Box>

          <Tabs
            value={value}
            onChange={(_, v: CommonHeaderTabValue) => onChange?.(v)}
            textColor="inherit"
            indicatorColor="primary"
            variant={isMdUp ? 'standard' : 'fullWidth'}
            sx={headerStyles.tabs}
          >
            <Tab
              value="insurance"
              label="Scoring Tool"
              sx={headerStyles.tab}
            />
            <Tab
              value="agents"
              label="Agent Performance"
              sx={headerStyles.tab}
            />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
