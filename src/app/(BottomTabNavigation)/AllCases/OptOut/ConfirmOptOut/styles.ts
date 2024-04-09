import { StyleSheet } from 'react-native';

import { colors } from '../../../../../styles/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  screenContainer: {
    width: '85%',
    height: '95%',
    justifyContent: 'space-between',
    whiteSpace: 'pre-line',
  },
  contentContainer: {
    flexDirection: 'column',
    rowGap: 34,
    marginTop: 40,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
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
    color: colors.darkGrey,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 47,
    borderRadius: 5,
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
  textIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 24,
  },
  infoContainer: {
    flexDirection: 'column',
    rowGap: 20,
  },
});
