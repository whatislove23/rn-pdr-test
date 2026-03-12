import { theme } from '../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    width: 35,
    height: 35,
    backgroundColor: theme.colors.grayTertiary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootActive: {
    width: 35,
    height: 35,
    backgroundColor: theme.colors.greenPrimary,
    borderRadius: 100,
  },
});
