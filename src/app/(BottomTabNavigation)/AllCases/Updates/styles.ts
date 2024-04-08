import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  contentContainer: {
    width: '84%',
  },
  innerScroll: {
    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: 'column',
    rowGap: 12,
    paddingVertical: 16,
  },
  lineStyle: {
    borderTopWidth: 1,
    borderTopColor: colors.midGrey,
  },
  titleText: {
    fontSize: 32,
    lineHeight: 33,
    fontStyle: 'normal',
    fontWeight: '600',
  },
});
