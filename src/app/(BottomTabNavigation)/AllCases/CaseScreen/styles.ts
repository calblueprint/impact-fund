import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    display: 'flex',
    width: '100%', // essentially the safeAreaView container
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
    // alignItems: 'center',
    // minHeight: 900,
    width: '92%',
    // width: 360,
    marginTop: 30,
  },
  headerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 30,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    color: colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
