import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    width: '81%',
    flexDirection: 'column',
    rowGap: 20,
  },
  instructionContainer: {
    rowGap: 10,
  },
  otpContainer: {
    backgroundColor: colors.lightGrey,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  otpInputBoxes: {
    width: 40,
    height: 40,
  },
  errorContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'flex-end',
  },
  nextButtonBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    width: '100%',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  instructionText: {
    color: colors.darkGrey,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 18,
  },
  headerText: {
    color: colors.black,
    fontSize: 26,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 28,
  },
  buttonText: {
    color: colors.white,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  underlineText: {
    textDecorationLine: 'underline',
    marginTop: 21,
  },
  errorText: {
    color: colors.darkRed,
    marginBottom: -9,
  },
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '84%',
    marginBottom: 60,
  },
});
