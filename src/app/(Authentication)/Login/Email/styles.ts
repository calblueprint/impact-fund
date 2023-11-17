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
    marginRight: 35,
  },
  emailText: {
    marginTop: 90,
    marginRight: 225,
    fontSize: 13,
    opacity: 0.35,
  },
  inputBox: {
    marginTop: 97,
    width: '100%',
    alignItems: 'center',
  },
  nextText: {
    marginRight: 240,
    fontSize: 14,
    fontWeight: '400',
  },
  nextButtonGrey: {
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.midGrey,
    width: 316,
    height: 50,
    padding: 15,
    opacity: 0.35,
  },
  nextButton: {
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.black,
    width: 316,
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
});
