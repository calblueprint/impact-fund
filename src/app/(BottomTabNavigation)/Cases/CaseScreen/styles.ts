import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  scrollView: {
    alignItems: 'center',
    minHeight: '100%',
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
