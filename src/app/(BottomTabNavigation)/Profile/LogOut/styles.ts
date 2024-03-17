import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  screenContainer: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 29,
    paddingRight: 29,
    width: '100%',
    borderBottom: 'solid',
    borderColor: colors.midGrey,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
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
  },
});
