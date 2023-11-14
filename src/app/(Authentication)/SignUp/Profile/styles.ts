import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

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
  displayText: {
    marginRight: 253,
    fontSize: 13,
    opacity: 0.35,
  },
  displayTextEmail: {
    marginRight: 225,
    fontSize: 13,
    opacity: 0.35,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginRight: 70,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 0.75,
    width: 310,
    borderColor: colors.darkGrey,
    marginBottom: 15,
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
  nextButton: {
    backgroundColor: colors.white,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 3,
    borderColor: colors.darkGrey,
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
    marginTop: 20,
    marginRight: 25,
    marginBottom: 20,
  },
});
