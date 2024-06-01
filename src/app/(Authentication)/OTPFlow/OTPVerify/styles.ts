import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  otpContainer: {
    backgroundColor: colors.lightGrey,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  otpInputBoxes: {
    width: 40,
    height: 40,
  },
  resendContainer: {
    height: 20,
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 5,
  },
});
