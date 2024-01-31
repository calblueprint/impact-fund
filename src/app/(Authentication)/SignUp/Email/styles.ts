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
    marginRight: 93,
  },
  backText: {
    color: colors.midGrey,
    fontSize: 16,
    fontWeight: '400',
  },
  backButton: {
    marginBottom: 40,
    marginRight: 79,
  },
  image: {
    marginTop: 2,
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
  nextText: {
    color: colors.white,
    marginRight: 200,
    fontSize: 14,
    opacity: 1,
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: colors.black,
    alignItems: 'center',
    borderRadius: 3,
    borderColor: colors.black,
    borderWidth: 1,
    width: 310,
    height: 50,
    padding: 15,
    flexDirection: 'row',
  },
  nextButtonGray: {
    backgroundColor: colors.midGrey,
    alignItems: 'center',
    borderRadius: 3,
    borderColor: colors.midGrey,
    borderWidth: 1,
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
    marginTop: 24,
    marginRight: 130,
    marginBottom: 25,
  },
  inputBox: {
    marginTop: 11,
    width: '100%',
    alignItems: 'center',
  },
});
