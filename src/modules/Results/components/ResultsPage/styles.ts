import { theme } from '../../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    padding: '5%',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 24,
  },
  content: {
    gap: 20,
  },
  subtitle: {
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: 500,
  },
  textWrapper: {
    gap: 10,
  },
  textBold: {
    fontWeight: 'bold',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 10,
  },
  authText: {
    textAlign: 'center',
    color: theme.colors.graySecondary,
  },
});
