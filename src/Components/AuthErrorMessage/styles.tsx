import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  errorMessageBox: {
    marginTop: 13,
    height: 50,
    width: 310,
  },
  errorMessageText: {
    color: colors.darkRed,
    fontSize: 14,
    fontWeight: '400',
  },
});
