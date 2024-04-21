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
    height: 41,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
  },
  cancelButton: {
    width: '48%',
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
  },
  confirmButton: {
    width: '48%',
    marginLeft: 13,
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: 5,
    alignItems: 'center',
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
    marginLeft: 6,
  },
});
