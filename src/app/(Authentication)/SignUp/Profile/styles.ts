import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

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
    backgroundColor: '#339FFF',
    padding: 10,
  },
  input: {
    margin: 12,
    height: 40,
    borderBottomWidth: 2,
    padding: 10,
    width: 310,
    borderRadius: 5,
    borderColor: colors.midGrey,
  },
});
