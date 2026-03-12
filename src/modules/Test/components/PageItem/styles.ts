import { theme } from '../../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  default: {
    borderRadius: 8,
    padding: 8,
    width: 40,
    height: 40,
    borderColor: theme.colors.graySecondary,
    backgroundColor: theme.colors.gray,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  success: {
    backgroundColor: theme.colors.greenPrimary,
    borderColor: theme.colors.greenSecondary,
  },
  current: {
    borderColor: theme.colors.black,
  },
  error: {
    borderColor: theme.colors.redSecondary,
    backgroundColor: theme.colors.redPrimary,
  },
  defaultText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.graySecondary,
  },
  successText: {
    color: theme.colors.greenTertiary,
  },
  currentText: {
    color: theme.colors.black,
  },
  errorText: {
    color: theme.colors.redTertiary,
  },
});
