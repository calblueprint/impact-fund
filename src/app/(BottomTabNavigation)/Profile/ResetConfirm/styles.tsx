import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  contentContainer: {
    width: '84%',
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
  instructionContainer: {
    marginTop: 34,
    width: '100%',
    flexDirection: 'column',
    rowGap: 20,
  },
  instructionRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 30,
  },
  instructionText: {
    flex: 1,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    color: colors.black,
  },
  titlText: {
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '800',
    color: colors.black,
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
