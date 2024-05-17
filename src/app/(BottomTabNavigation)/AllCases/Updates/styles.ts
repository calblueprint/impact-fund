import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  contentContainer: {
    height: '100%',
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
});
