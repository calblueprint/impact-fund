import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
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
  nextButtonGrey: {
    backgroundColor: colors.midGrey,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 3,
    borderColor: colors.midGrey,
    borderWidth: 1,
    width: 125,
    height: 50,
    padding: 15,
  },
  nextButton: {
    backgroundColor: colors.black,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 3,
    borderColor: colors.black,
    borderWidth: 1,
    width: 125,
    height: 50,
    padding: 15,
  },
  errorMessageBox: {
    marginTop: 10,
    height: 50,
    borderWidth: 1,
  },
  errorMessage: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
    width: 310,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  inputBox: {
    marginTop: 40,
  },
  nextLine: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    width: 310,
    marginLeft: 30,
    marginTop: 100,
  },
  arrow: {
    marginLeft: 70,
    marginTop: -14,
  },
  passwordText: {
    fontWeight: '400',
    marginLeft: 7,
    fontSize: 14,
    color: colors.darkGrey,
    marginTop: 16,
  },
});
