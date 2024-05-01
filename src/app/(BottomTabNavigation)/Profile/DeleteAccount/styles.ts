import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  screenContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '84%',
    paddingVertical: 40,
  },
  textContainer: {
    rowGap: 20,
    marginTop: 85,
  },
  topText: {
    fontSize: 38,
    fontStyle: 'normal',
    fontWeight: '800',
    color: colors.black,
  },
  blurb: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
  },
  buttonView: {
    width: '48%',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    columnGap: 15,
  },
});
