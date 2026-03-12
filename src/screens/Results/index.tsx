import { SafeAreaView } from 'react-native';
import { ResultsPage } from '../../modules/Results';

import { RouteProp, useRoute } from '@react-navigation/native';

type ResultsRouteProp = RouteProp<{ RESULTS: { someProp: string } }, 'RESULTS'>;
const Results = () => {
  const route = useRoute<ResultsRouteProp>();
  const { score, time, variant, seconds } = route.params as unknown as {
    score: number;
    time: string;
    variant: 'success' | 'error';
    seconds: number;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ResultsPage
        score={score}
        time={time}
        variant={variant}
        seconds={seconds}
      />
    </SafeAreaView>
  );
};
export default Results;
