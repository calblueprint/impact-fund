import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  textContainer: {
    // this might be unnecessary idk
    height: '100%',
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
