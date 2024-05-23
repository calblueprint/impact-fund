import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  screenContainer: {
    paddingVertical: 32,
    paddingHorizontal: 29,
    borderColor: colors.midGrey,
    borderTopWidth: 0.5,
    justifyContent: 'space-between',
    rowGap: 25,
  },
});
