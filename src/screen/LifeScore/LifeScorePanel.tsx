
import { Box, Paper } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectScores, selectWeights, selectFixedPay, selectVariablePay, selectFinalScore } from '../../store/selectors/InsuranceSelectors';
import { updateWeight, updateFixedPay as updateFixedPayAction, updateVariablePay as updateVariablePayAction } from '../../store/slices/InsuranceSlice';
import { styles } from './styles';
import { SCORE_META } from './constants';
import { Header } from './components/Header';
import { ScoreCard } from './components/ScoreCard';
import { FinalSection } from './components/FinalSection';

export default function LifeScorePanel() {
  const dispatch = useAppDispatch();
  const scores = useAppSelector(selectScores);
  const weights = useAppSelector(selectWeights);
  const fixedPay = useAppSelector(selectFixedPay);
  const variablePay = useAppSelector(selectVariablePay);
  const finalScore = useAppSelector(selectFinalScore);

  const handleWeightChange = (key: keyof typeof weights, value: number) => {
    const next = { ...(weights as any), [key]: Number(value.toFixed(1)) };
    dispatch(updateWeight(next as any));
  };

  const handleFixedPayChange = (value: number) => {
    dispatch(updateFixedPayAction(value));
  };

  const handleVariablePayChange = (value: number) => {
    dispatch(updateVariablePayAction(value));
  };

  return (
    <Box sx={styles.container}>
      {/* <Header sx={styles.headerSpacer} finalScore={finalScore} /> */}

      <Paper elevation={0} sx={styles.paper}>
        <Box sx={styles.grid}>
          {SCORE_META.map(({ key, label, color }) => {
            const value = (scores as any)?.[key];
            if (typeof value !== 'number') return null;
            const weight = (weights as any)?.[key] ?? 0;
            return (
              <ScoreCard
                key={key}
                label={label}
                value={value}
                weight={weight}
                color={color}
                onChangeWeight={(w) => handleWeightChange(key as any, w)}
              />
            );
          })}
        </Box>

        <FinalSection
          finalScore={finalScore}
          fixedPay={fixedPay}
          variablePay={variablePay}
          onFixedPayChange={handleFixedPayChange}
          onVariablePayChange={handleVariablePayChange}
        />
      </Paper>
    </Box>
  );
}