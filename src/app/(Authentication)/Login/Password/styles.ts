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
  contentContainer: {
    width: '81%',
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
    width: '80%',
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginRight: 97,
  },
  nextText: {
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    fontWeight: '600',
  },
  errorMessageBox: {
    marginTop: 13,
    height: 50,
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
    marginTop: 70,
  },
  forgotPasswordText: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.darkGrey,
  },
  ButtonLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: 120,
    justifyContent: 'space-between',
  },
});
