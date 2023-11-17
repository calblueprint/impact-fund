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
    marginBottom: 40,
    marginRight: 280,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginRight: 97,
  },
  passwordText: {
    marginTop: 90,
    marginRight: 253,
    fontSize: 13,
    opacity: 0.35,
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
    borderColor: colors.midGrey,
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
    borderColor: colors.black,
    borderWidth: 1,
    width: 310,
    height: 50,
    padding: 15,
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
    marginTop: 97,
  },
});
