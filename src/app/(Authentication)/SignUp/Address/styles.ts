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
    marginRight: 70,
    marginBottom: 20,
  },
  inputBox: {
    marginTop: 11,
    width: '100%',
    alignItems: 'center',
  },
  inputWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInputBox: {
    marginTop: 11,
    alignItems: 'flex-start',
  },
  displayTextSmall: {
    fontSize: 13,
    opacity: 0.35,
  },
  inputSmall: {
    height: 40,
    borderBottomWidth: 0.75,
    width: 147,
    borderColor: colors.darkGrey,
  },
  inputSmallFocused: {
    height: 40,
    borderBottomWidth: 2,
    width: 147,
    borderColor: colors.darkRed,
  },
  space: {
    margin: 5,
  },
  nextText: {
    color: colors.white,
    fontSize: 17,
    opacity: 1,
    fontWeight: '600',
    marginLeft: 25,
  },
  nextButton: {
    backgroundColor: colors.black,
    marginBottom: 20,
    marginRight: 165,
    borderRadius: 3,
    borderColor: colors.black,
    width: 150,
    height: 50,
    padding: 15,
    marginTop: 60,
  },
  errorMessage: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
    width: '81%',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
});
