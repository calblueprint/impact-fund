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
});
