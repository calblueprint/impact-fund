import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '84%',
    width: '81%',
    paddingVertical: 40,
  },
  image: {
    width: 130,
    height: 16,
  },
  textContainer: {
    marginTop: 275,
    justifyContent: 'center',
  },
  welcomeText: {
    color: colors.black,
    fontSize: 39.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 55,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 35,
  },
  orTextContainer: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '300',
    fontStyle: 'normal',
  },
  horizontalLine: {
    flex: 1,
    height: 0.5,
    backgroundColor: colors.black,
  },
  nextTextWhite: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '500',
  },
  nextTextBlack: {
    color: colors.black,
    fontSize: 17,
    fontWeight: '500',
  },
  baseButton: {
    height: 55,
    borderBottomWidth: 2.25,
  },
});
