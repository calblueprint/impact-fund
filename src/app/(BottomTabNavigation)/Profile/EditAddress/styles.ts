import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: colors.midGrey,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 310,
    borderRadius: 5,
    borderColor: colors.midGrey,
  },
});
