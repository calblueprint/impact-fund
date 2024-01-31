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
  header: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 90,
    marginRight: 100,
    marginBottom: 40,
  },
  image: {
    marginTop: 2,
  },
  backText: {
    color: colors.midGrey,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 7,
  },
  backButton: {
    marginRight: 82,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
    marginRight: 25,
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
    margin: 11,
  },

  space2: {
    marginBottom: 50,
  },
  nextText: {
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    fontWeight: '600',
    marginLeft: 85,
    marginRight: 20,
  },
  nextButton: {
    backgroundColor: colors.black,
    marginBottom: 20,
    borderRadius: 3,
    borderColor: colors.black,
    width: 310,
    height: 50,
    padding: 15,
    flexDirection: 'row',
  },
  nextButtonGray: {
    backgroundColor: colors.midGrey,
    marginBottom: 20,
    borderRadius: 3,
    borderColor: colors.midGrey,
    width: 310,
    height: 50,
    padding: 15,
    flexDirection: 'row',
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
  check: {
    marginTop: 3,
  },
});
