import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  contentContainer: {
    width: '81%',
    marginTop: 70,
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
  titleText: {
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '800',
    color: colors.black,
    marginTop: 25,
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
  nextText: {
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    fontWeight: '600',
    marginLeft: 10,
  },
  nextButton: {
    marginTop: 100,
  },
});
