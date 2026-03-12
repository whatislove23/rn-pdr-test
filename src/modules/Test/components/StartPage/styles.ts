import { theme } from '../../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: '5%',
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    gap: 16,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.black,
    textAlign: 'center',
    fontWeight: '600',
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  content: {
    gap: 40,
  },
});
