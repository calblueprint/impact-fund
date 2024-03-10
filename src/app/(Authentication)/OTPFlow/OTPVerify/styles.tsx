import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    // height: '100%',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // padding: 30,
  },
  contentContainer: {
    borderWidth: 1,
    width: '84%',
    alignItems: 'center',
  },
  otpContainerStyle: {
    backgroundColor: colors.lightGrey,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  otpTextInputStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    width: 40,
    height: 40,
  },
  otpInput: {
    // marginVertical: 100,
    borderWidth: 1,
  },
  bottomStuff: {
    // marginVertical: 70,
    width: '100%',
  },
  resendContainer: {
    marginTop: 10,
  },
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
  resendText: {
    textDecorationLine: 'underline',
  },

  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginRight: 35,
    marginBottom: 20,
  },
});
