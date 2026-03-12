import { theme } from '../../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    gap: 50,
    position: 'relative',
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: '5%',
    paddingTop: 100,
    overflow: 'hidden',
  },
  buttons: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputs: {
    gap: 10,
  },
  form: {
    gap: 25,
  },
  resend: {
    textAlign: 'center',
    color: theme.colors.graySecondary,
  },
  error: {
    textAlign: 'center',
    color: theme.colors.redPrimary,
  },

  buttonsWrapper: {
    gap: 20,
  },
  forgotPassword: {
    textAlign: 'center',
    color: theme.colors.graySecondary,
  },
});
