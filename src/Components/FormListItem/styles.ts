import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 5.5,

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

    // borderBottomWidth: 0.5,
    // borderColor: colors.midGrey,
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
