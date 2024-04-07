import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    height: 126,
    width: '100%',
    flexDirection: 'row',
    columnGap: 17,
  },
  contentContainer: {
    // this might be unnecessary idk
    height: '100%',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'space-between',
  },
  instructionContainer: {
    paddingHorizontal: 13,
    paddingVertical: 3,

    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.midGrey,
  },
  titleText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
    color: colors.midnightBlack,
  },
  bottomText: {
    color: colors.darkGrey,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
  },
});
