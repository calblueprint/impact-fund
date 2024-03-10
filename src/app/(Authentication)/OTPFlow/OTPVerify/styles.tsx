import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    borderWidth: 1,
    width: '84%',
    flexDirection: 'column',
    alignItems: 'center',
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
  otpTextInput: {
    width: 40,
    height: 40,
  },
  bottomStuff: {
    // marginVertical: 70,
    width: '100%',
  },
  resendContainer: {},
  verifyButton: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorContainer: {
    width: '100%',
    height: 40,
  },
  errorMessage: {
    color: colors.darkRed,
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
  underlineText: {
    textDecorationLine: 'underline',
  },
});
