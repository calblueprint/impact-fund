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
  input: {
    marginTop: 5,
    height: 40,
    borderBottomWidth: 0.75,
    width: 310,
    borderColor: colors.darkGrey,
  },
  inputFocused: {
    marginTop: 5,
    height: 40,
    borderBottomWidth: 2,
    width: 310,
    borderColor: colors.darkRed,
    borderRadius: 2,
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
  errorMessage: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
    width: '81%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});
