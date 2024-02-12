import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    height: 56,
    width: 66,
    tintColor: colors.midGrey,
  },
  buttonText: {
    fontSize: 9,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 21,
    color: colors.midRed,
  },
});
