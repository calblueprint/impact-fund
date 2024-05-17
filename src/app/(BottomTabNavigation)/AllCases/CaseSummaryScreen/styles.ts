import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  linkContainer: {
    height: '16%',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: '7%',
    borderTopWidth: 0.5,
    borderColor: colors.darkGrey,
    backgroundColor: colors.white,
    zIndex: 2,
  },
});
