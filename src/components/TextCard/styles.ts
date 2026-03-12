import { theme } from '../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    padding: 16,
    gap: 10,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: theme.colors.gray,
    borderColor: theme.colors.graySecondary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardActive: {
    borderColor: theme.colors.black,
  },
  cardTextActive: {
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    flexWrap: 'wrap',
    fontWeight: 'medium',
    color: theme.colors.black,
    maxWidth: '90%',
  },
  primary: {},
  secondary: {},
  checked: {
    borderColor: theme.colors.black,
  },
  unchecked: {},
  checkedIcon: {
    borderWidth: 1,
    borderRadius: 1000,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginLeft: 'auto',
  },
  checkedIconInner: {
    backgroundColor: theme.colors.black,
    borderRadius: 1000,
    width: 10,
    height: 10,
  },
  success: {
    backgroundColor: theme.colors.greenPrimary,
    borderColor: theme.colors.greenSecondary,
    color: theme.colors.white,
  },
  error: {
    borderColor: theme.colors.redSecondary,
    backgroundColor: theme.colors.redPrimary,
    color: theme.colors.white,
  },
});
