import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  root: {
    height: 50,
    padding: 16,
    borderRadius: 8,
    borderColor: theme.colors.grayTertiary,
    borderWidth: 1,
    backgroundColor: theme.colors.gray,
    color: theme.colors.black,
    alignItems: 'center',
    flexDirection: 'row',
  },
  secondary: {
    padding: 18,
    borderColor: theme.colors.graySecondary,
  },
  iconWrapper: {
    marginLeft: 'auto',
  },
});
