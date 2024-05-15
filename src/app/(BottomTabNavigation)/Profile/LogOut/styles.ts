import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
    justifyContent: 'flex-end',
  },
  screenContainer: {
    paddingVertical: 32,
    paddingHorizontal: 29,
    borderColor: colors.midGrey,
    borderTopWidth: 0.5,
    justifyContent: 'space-between',
    rowGap: 25,
  },
});
