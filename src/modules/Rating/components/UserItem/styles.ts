import { theme } from '../../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    gap: 10,
    borderBottomColor: theme.colors.graySecondary,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  textMain: {
    fontWeight: 'bold',
  },
  textGreen: {
    color: theme.colors.greenTertiary,
    fontWeight: 'bold',
  },
});
