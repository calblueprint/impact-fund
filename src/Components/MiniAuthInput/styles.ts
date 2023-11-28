import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  inputText: {
    marginLeft: 0,
    fontSize: 13,
    opacity: 0.35,
  },
  input: {
    height: 40,
    borderBottomWidth: 0.75,
    width: 140,
    borderColor: colors.darkGrey,
  },
  inputFocused: {
    height: 40,
    borderBottomWidth: 2,
    width: 140,
    borderColor: colors.darkRed,
  },
});
