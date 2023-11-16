import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: 349,
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.midGrey,
  },
  topContainer: {
    height: 26,
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 23,
    marginBottom: 6,
  },
  bottomContainer: {
    width: '88%',
    marginBottom: 23,
  },
  formRouteButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
  },
});
