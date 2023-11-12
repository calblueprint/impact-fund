import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%', // essentially the safeAreaView container
    backgroundColor: colors.white,
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    width: '92%',
    rowGap: 20,
  },
  headerContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    paddingRight: 30,
  },
});
