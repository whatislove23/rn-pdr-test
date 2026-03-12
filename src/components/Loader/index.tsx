import { theme } from '../../theme';
import { ActivityIndicator } from 'react-native';

export const Loader = () => {
  return <ActivityIndicator size="large" color={theme.colors.greenPrimary} />;
};
