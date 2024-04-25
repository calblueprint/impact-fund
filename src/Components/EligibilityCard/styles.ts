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
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  leftContainer: {
    flex: 0.15,
  },
  middleContainer: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    rowGap: 12,
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
    flex: 1,
    height: 0.5,
    backgroundColor: colors.black,
  },
  headerText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 21,
    color: colors.black,
  },
  bodyText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
    color: colors.darkGrey,
  },
  separatorText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
    color: colors.black,
  },
});
