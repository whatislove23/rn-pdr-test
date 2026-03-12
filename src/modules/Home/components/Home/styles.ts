import { theme } from '../../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    padding: '5%',
    flex: 1,
    gap: 50,
  },
  title: {
    fontSize: 24,
  },
  cardList: {
    gap: 14,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
});
