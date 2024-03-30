import { StyleSheet } from 'react-native';

import { colors } from '../../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  outerScroll: {
    width: '84%',
    height: '84%',
  },
  innerScroll: {
    paddingVertical: 20,
    rowGap: 20,
  },
  title: {
    color: colors.midnightBlack,
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '800',
  },
  inLineSubInfo: {
    flexDirection: 'row',
  },
});
