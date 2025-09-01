import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#22c55e' }, // emerald
    secondary: { main: '#60a5fa' }, // blue
    background: {
      default: '#0b1120',
      paper: 'rgba(15, 23, 42, 0.6)',
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, Avenir, Helvetica, Arial, sans-serif',
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(148, 163, 184, 0.12)'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'radial-gradient(800px 300px at 15% -5%, rgba(99,102,241,0.24), transparent 60%),\
             radial-gradient(900px 350px at 85% 0%, rgba(34,197,94,0.18), transparent 60%),\
             linear-gradient(180deg, #0b132b 0%, #0b1120 100%)',
        }
      }
    },
  }
})

export default theme
