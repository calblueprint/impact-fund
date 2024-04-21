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
  backButton: {
    marginTop: 100,
    marginBottom: 30,
    width: '80%',
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    width: '80%',
  },
  inputBox: {
    marginTop: 40,
  },
  nextText: {
    marginRight: 17,
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  forgotPasswordText: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.darkGrey,
  },
  buttonContainer: {
    width: 120,
    justifyContent: 'space-between',
  },
  // nextButtonActive: {
  //   backgroundColor: colors.black,
  //   borderColor: colors.black,
  // },
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
  nextLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 310,
    marginTop: 70,
  },
  ButtonLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
