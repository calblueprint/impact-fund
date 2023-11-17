import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scanner: {
    height: 300,
    width: 300,
    border: 'solid',
    borderWidth: 3,
  },

  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#339FFF',
    padding: 10,
  },
  errorMessage: {
    color: colors.midRed,
  },
});
