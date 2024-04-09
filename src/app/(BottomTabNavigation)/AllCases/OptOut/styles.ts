import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    rowGap: 10,
  },
  screenContainer: {
    width: '85%',
    height: '95%',
    justifyContent: 'space-between',
    whiteSpace: 'pre-line',
  },
  contentContainer: {
    flexDirection: 'column',
    rowGap: 34,
    marginTop: 40,
  },
  infoContainer: {
    flexDirection: 'column',
    rowGap: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
    rowGap: 12,
  },
  buttonBase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 47,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  buttonWhite: {
    backgroundColor: colors.white,
    borderColor: colors.black,
  },
  buttonBlack: {
    backgroundColor: colors.black,
  },
  titleText: {
    fontSize: 38,
    fontWeight: '800',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  buttonText: {
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  infoText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    color: colors.darkGrey,
    flexWrap: 'wrap',
  },
  blackText: {
    color: colors.black,
  },
  whiteText: {
    color: colors.white,
  },
  textIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 24,
  },
});
