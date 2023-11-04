import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 6.3,
    marginBottom: 10,

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

    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
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
