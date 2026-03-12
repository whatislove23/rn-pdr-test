import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.greenPrimary,
    borderRadius: 100,
    height: 51,
  },
  textPrimary: {
    color: theme.colors.white,
    fontWeight: 600,
  },
  rootSecondary: {
    backgroundColor: theme.colors.gray,
  },
  textSecondary: {
    color: theme.colors.greenPrimary,
  },
  rootDisabled: {
    opacity: 0.5,
  },
});
