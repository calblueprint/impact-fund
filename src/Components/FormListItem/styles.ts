import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 8,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 0.125,
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 0.875,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
  },
  titleText: {
    fontSize: 16,
    lineHeight: 21,
    color: colors.black,
  },
  dateText: {
    fontSize: 12,
    lineHeight: 21,
    color: colors.darkGrey,
  },
});
