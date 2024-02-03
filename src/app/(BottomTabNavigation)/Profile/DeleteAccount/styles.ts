import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    alignItems: 'center',
  },
  screenContainer: {
    width: '85%',
    height: '100%',
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: 63, // copied this value from profile screen
  },
  textContainer: {
    rowGap: 20,
  },
  topText: {
    fontSize: 38,
    fontStyle: 'normal',
    fontWeight: '800',
    color: colors.black,
  },
  blurb: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    color: colors.black,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '5%',
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
    paddingVertical: 10,
    alignItems: 'center',
  },
  confirmText: {
    color: colors.white,
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
  },
});
