import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  leftContainer: {
    flex: 0.15,
  },
  middleContainer: {
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flex: 0.05,
    alignItems: 'flex-end',
  },
  separatorComponent: {
    height: 33,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    height: 0.5,
    marginVertical: 15,
    backgroundColor: colors.midGrey,
  },
  headerText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 21,
    color: colors.black,
  },
  bodyText: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
    color: colors.black,
  },
  separatorText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
    color: colors.black,
  },
  topContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  smallText: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
    color: colors.darkGrey,
  },
});
