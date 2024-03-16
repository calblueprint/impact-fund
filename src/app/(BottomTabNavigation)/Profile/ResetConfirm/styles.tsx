import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  mainContainer: {
    width: '80%',
    marginTop: 110,
  },
  backText: {
    color: colors.midGrey,
    fontSize: 16,
    fontWeight: '400',
  },
  backContainer: {
    marginBottom: 40,
  },
  instructionText: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '800',
  },
});
