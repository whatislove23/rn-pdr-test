import { theme } from '../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '10%',
    paddingTop: 16,
    backgroundColor: theme.colors.gray,
  },
  safeArea: {
    backgroundColor: theme.colors.gray,
  },
  tab: {},
});
