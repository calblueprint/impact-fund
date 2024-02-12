import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
  backText: {
    color: colors.midGrey,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 7,
  },
  backButton: {
    marginTop: 100,
    marginBottom: 30,
    marginRight: 280,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginRight: 97,
  },
  nextText: {
    color: colors.white,
    marginRight: 50,
    fontSize: 16,
    opacity: 1,
    fontWeight: '600',
  },
  nextButtonBase: {
    alignItems: 'center',
    borderRadius: 5,
    width: 120,
    height: 50,
    padding: 15,
  },
  nextButtonDisabled: {
    backgroundColor: colors.midGrey,
    borderColor: colors.midGrey,
  },
  nextButtonActive: {
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
  errorMessageBox: {
    marginTop: 13,
    height: 50,
    width: 310,
  },
  errorMessageText: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
  },
  inputBox: {
    marginTop: 40,
  },
  nextLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 310,
    marginTop: 70,
  },
  arrow: {
    marginLeft: 70,
    marginTop: -14,
  },
  forgotPasswordText: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.darkGrey,
  },
});
