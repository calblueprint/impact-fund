import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 12,
    padding: 20,
  },
  rightContainer: {
    flexDirection: 'column',
    flex: 1,
    rowGap: 15,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.midGrey,
    paddingBottom: 5,
  },
});
