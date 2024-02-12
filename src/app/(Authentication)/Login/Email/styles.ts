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
    fontWeight: '400',
    marginLeft: 7,
    color: colors.midGrey,
    fontSize: 16,
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
    marginRight: 35,
  },
  inputBox: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  nextText: {
    marginRight: 17,
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  passwordText: {
    fontWeight: '400',
    marginLeft: 7,
    fontSize: 14,
    color: colors.darkGrey,
    marginTop: 16,
  },
  nextButtonGrey: {
    backgroundColor: colors.midGrey,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.midGrey,
    width: 125,
    height: 50,
    padding: 15,
  },
  nextButton: {
    backgroundColor: colors.black,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.black,
    width: 125,
    height: 50,
    padding: 15,
  },
  errorMessageBox: {
    marginTop: 10,
    height: 50,
  },
  errorMessage: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
    width: 310,
    alignItems: 'center',
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
});
