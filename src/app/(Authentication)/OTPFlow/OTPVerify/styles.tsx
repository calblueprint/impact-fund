import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 30,
  },
  otpInput: {
    marginVertical: 100,
  },
  bottomStuff: {
    marginVertical: 70,
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
