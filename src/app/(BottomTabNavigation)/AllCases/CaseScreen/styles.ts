import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    display: 'flex',
    width: '100%',
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
    width: '92%',
  },
  headerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    marginTop: 20,
  },
  title: {
    flex: 1,
    color: colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
