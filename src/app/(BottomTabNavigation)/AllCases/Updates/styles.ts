import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
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
    borderWidth: 1,
  },
  title: {
    color: colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  lineStyle: {
    borderTopWidth: 1,
    borderTopColor: colors.midGrey,
    marginVertical: 12,
  },
  titleText: {
    fontSize: 32,
    lineHeight: 33,
    fontStyle: 'normal',
    fontWeight: '700',
  },
});
