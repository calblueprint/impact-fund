import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '84%',
    paddingTop: 40,
    paddingBottom: 60,
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
    marginTop: 60,
  },
  nextText: {
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    fontWeight: '600',
    marginLeft: 10,
  },
  nextButton: {
    marginTop: 400,
  },
});
