import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  linkContainer: {
    height: '16%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 20,

    paddingHorizontal: '7%',
    borderTopWidth: 0.5,
    borderColor: colors.darkGrey,
    zIndex: 2,
  },
  buttonBase: {
    flex: 1,
    height: 47,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,

    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.midnightBlack,
  },
  cancelButton: {
    backgroundColor: colors.white,
  },
  addCaseButton: {
    backgroundColor: colors.midnightBlack,
  },
  buttonText: {
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  whiteText: {
    color: colors.white,
  },
  blackText: {
    color: colors.midnightBlack,
  },
});
