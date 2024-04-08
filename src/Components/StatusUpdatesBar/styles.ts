import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
export default StyleSheet.create({
  container: {
    // height: ,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    // paddingHorizontal: 20,
    padding: 16,
    rowGap: 10,

    borderWidth: 0.5,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: colors.midGrey,

    shadowColor: colors.black,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1.25,
    shadowRadius: 0.05,
    elevation: 1,
  },
  topContainer: {
    width: '100%',
    height: 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 0.5,
    borderBottomColor: colors.midGrey,
  },
  updatesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  statusContainer: {
    height: 29,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',

    border: 'solid',
    borderWidth: 0.3,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 20,
    lineHeight: 21,
    fontStyle: 'normal',
    fontWeight: '400',
    color: colors.midnightBlack,
  },
  statusTextColor: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
  },
  buttonText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
  },
});
