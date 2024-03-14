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
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
    color: colors.black,
  },
  dateText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '200',
    lineHeight: 21,
    color: colors.black,
  },
});
