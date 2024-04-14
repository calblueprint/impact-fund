import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  titleContainer: {
    height: 41,
  },
  instructionContainer: {
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 3,

    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.midGrey,

    marginTop: 20,
    marginBottom: 11,
  },
  titleText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 18,
    color: colors.midnightBlack,
    overflow: 'hidden',
  },
  bottomText: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
    color: colors.darkGrey,
  },
  updateText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    color: colors.darkGrey,
  },
});
