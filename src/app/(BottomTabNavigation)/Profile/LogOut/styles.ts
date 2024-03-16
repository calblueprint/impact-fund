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
    width: '85%',
    height: '100%', // 100% results in buttons touching bottom tab nav rn but i assume we can use 100% after we remove bottom tab from this page
    justifyContent: 'flex-end',
  },
  headerContainer: {
    marginTop: 63, // copied this value from profile screen
  },
  textContainer: {
    rowGap: 20,
    height: '60%', // this is a bit of a guess
    justifyContent: 'flex-end',
  },
  topText: {
    fontSize: 38,
    fontStyle: 'normal',
    fontWeight: '800',
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '15.8%', // scaled by 95/3 from 5% (matched DeleteAccount)
  },
  buttonView: {
    width: '48%',
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
  },
  cancelButton: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
  },
  cancelText: {
    color: colors.black,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: colors.black,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmText: {
    color: colors.white,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  line: {
    width: '100%',
    height: '30%',
    borderBottom: 'solid',
    borderColor: colors.midGrey,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetween: {
    width: '100%',
    height: '15.8%',
  },
});
