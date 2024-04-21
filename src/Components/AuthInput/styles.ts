import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  labelText: {
    marginLeft: 0,
    fontSize: 13,
    opacity: 0.35,
  },
  inputBox: {
    height: 40,
    width: '100%',
    borderBottomWidth: 0.75,
    borderColor: colors.darkGrey,
  },
  halfWidth: {
    width: '100%',
  },
  inputFocused: {
    borderBottomWidth: 2,
    borderColor: colors.darkRed,
  },
});
