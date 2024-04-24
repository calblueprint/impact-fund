import { StyleSheet } from 'react-native';

import { colors } from './colors';

export default StyleSheet.create({
  shadowBorder: {
    backgroundColor: colors.white,
    // border: 'solid',
    // borderColor: colors.midGrey,
    // borderWidth: 1,
    // borderRadius: 5,

    // shadowColor: colors.midGrey,
    // shadowOffset: { width: 0.05, height: 0.75 },
    // shadowOpacity: 1.25,
    // shadowRadius: 0.05,
    // elevation: 1,

    borderColor: colors.midGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,

    shadowColor: colors.midGrey,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1,
    shadowRadius: 0.75,
    elevation: 1,
  },
});
