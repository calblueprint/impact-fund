import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 12,
    paddingVertical: 23,
  },
  topContainer: {
    height: 32,
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.midGrey,
  },
  bottomContainer: {
    width: '88%',
  },
  formRouteButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 90,
  },
  titleText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 21,
    color: colors.black,
  },
  bodyText: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    color: colors.black,
  },
});
