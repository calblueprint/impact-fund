import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    height: 40,
    width: 338,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.midGrey,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});
