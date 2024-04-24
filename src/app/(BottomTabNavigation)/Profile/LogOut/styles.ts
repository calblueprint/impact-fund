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
    borderWidth: 0.5,
    justifyContent: 'space-between',
    rowGap: 25,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 15,
  },
  halfButton: {
    height: 45,
    width: '48%',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 38,
    fontStyle: 'normal',
    fontWeight: '800',
    color: colors.black,
  },
  cancelText: {
    color: colors.black,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  confirmText: {
    color: colors.white,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
  },
});
