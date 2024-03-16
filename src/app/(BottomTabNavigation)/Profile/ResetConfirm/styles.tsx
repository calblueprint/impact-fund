import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  mainContainer: {
    width: '80%',
    marginTop: 110,
  },
  backText: {
    color: colors.midGrey,
    fontSize: 16,
    fontWeight: '400',
  },
  backContainer: {
    marginBottom: 40,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
  },
  nextButtonBase: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    width: '100%',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  nextButtonDisabled: {
    backgroundColor: colors.midGrey,
    borderColor: colors.midGrey,
  },
  nextButtonActive: {
    backgroundColor: colors.black,
    borderColor: colors.black,
  },
  nextText: {
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    fontWeight: '600',
  },
  nextButton: {
    marginTop: 100,
  },
});
