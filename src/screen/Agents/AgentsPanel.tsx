import { Box, Paper } from '@mui/material';
import { styles } from './styles';
import { Header } from './components/Header';
import { AgentCard } from './components/AgentCard';
// remove: import { AGENTS } from './constants';
import { useAppSelector } from '../../store/hooks';
import { selectAgentsList } from '../../store/selectors/AgentSelectors';

export default function AgentsPanel() {
  const agents = useAppSelector(selectAgentsList);

  return (
    <Box sx={styles.container}>
      <Header />
      <Paper elevation={0} sx={styles.paper}>
        <Box sx={styles.grid}>
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </Box>
      </Paper>
    </Box>
  );
}