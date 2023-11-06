import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backText: {
    color: colors.lightGrey,
    fontSize: 16,
    opacity: 0.3,
    fontWeight: '400',
  },
  backButton: {
    marginTop: 100,
    marginBottom: 40,
    marginRight: 280,
    padding: 10,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginRight: 97,
  },
  passwordText: {
    marginTop: 115,
    marginRight: 240,
    fontSize: 13,
    opacity: 0.35,
  },
  input: {
    marginTop: 5,
    height: 40,
    borderBottomWidth: 1.5,
    padding: 10,
    width: 310,
    borderColor: colors.black,
  },
  inputFocused: {
    marginTop: 5,
    height: 40,
    borderBottomWidth: 2,
    padding: 10,
    width: 310,
    borderColor: colors.darkRed,
  },
  nextText: {
    marginRight: 230,
    fontSize: 14,
    opacity: 1,
    fontWeight: '400',
  },
  nextButtonGrey: {
    backgroundColor: colors.white,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 1,
    width: 310,
    height: 50,
    padding: 15,
    opacity: 0.3,
  },
  nextButton: {
    backgroundColor: colors.white,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 1,
    width: 310,
    height: 50,
    padding: 15,
  },
  errorMessageBox: {
    height: 70,
    marginLeft: 20,
    marginRight: 20,
  },
  errorMessage: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
  },
});