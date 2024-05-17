import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    minheight: '100%',
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '81%',
    marginBottom: 200,
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
