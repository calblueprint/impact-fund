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
    marginVertical: 100,
    width: '100%',
  },
  verifyButton: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 30,
  },
  resendButton: {
    marginTop: 30,
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
