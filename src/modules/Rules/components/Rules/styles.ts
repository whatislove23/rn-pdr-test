import { theme } from '../../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    padding: '5%',
    flex: 1,
    paddingTop: 16,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 24,
  },
  viewList: {
    marginTop: 40,
    marginBottom: 0,
  },
  ruleItem: {
    marginBottom: 10,
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: theme.colors.redPrimary,
    fontSize: 16,
  },
});
