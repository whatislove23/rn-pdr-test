import { theme } from '../../../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: '5%',
    backgroundColor: theme.colors.white,
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
  header: {
    gap: 20,
  },
  listWrapper: {
    height: 40,
    width: '100%',
  },
  list: {
    width: '100%',
  },
  question: {
    fontSize: 16,
    color: theme.colors.black,
    fontWeight: '600',
  },
  answerItemWrapper: {
    marginBottom: 10,
  },
  listItem: {
    paddingRight: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    objectFit: 'fill',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
});
