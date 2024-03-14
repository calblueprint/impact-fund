import { StyleSheet } from 'react-native';

import { colors } from '../../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  scrollContainer: {
    width: '82%',
    height: '84%',
  },
  title: {
    color: colors.midnightBlack,
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 18,
  },
  inLineSubInfo: {
    flexDirection: 'row',
  },
});
