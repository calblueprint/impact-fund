import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.white,
  },
  headerContainer: {
    height: 80,
    width: '84%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  casesContainer: {
    width: '84%',
    flexDirection: 'column',
    marginVertical: 17,
  },
  innerScroll: {
    rowGap: 20,
    paddingBottom: 90,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: colors.midGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 33,
    color: colors.black,
  },
});
