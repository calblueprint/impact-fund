import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  inputBox: {
    height: 40,
    width: '100%',
    borderBottomWidth: 0.75,
    borderColor: colors.darkGrey,
  },
  inputFocused: {
    borderBottomWidth: 2,
    borderColor: colors.darkRed,
  },
  labelText: {
    marginLeft: 0,
    fontSize: 13,
    opacity: 0.35,
  },
});
