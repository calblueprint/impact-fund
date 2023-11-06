import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backText: {
    color: colors.midGrey,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 7,
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
    marginRight: 35,
  },
  emailText: {
    marginTop: 90,
    marginRight: 225,
    fontSize: 13,
    opacity: 0.35,
  },
  input: {
    marginTop: 5,
    height: 40,
    borderBottomWidth: 1.5,
    padding: 10,
    width: 315,
    borderColor: colors.black,
  },
  inputFocused: {
    marginTop: 5,
    height: 40,
    borderBottomWidth: 2,
    padding: 10,
    width: 315,
    borderColor: colors.darkRed,
  },
  nextText: {
    marginRight: 240,
    fontSize: 14,
    fontWeight: '400',
  },
  nextButtonGrey: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.black,
    width: 316,
    height: 50,
    padding: 15,
    opacity: 0.35,
  },
  nextButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.black,
    width: 316,
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
    marginTop: 15,
  },
});
