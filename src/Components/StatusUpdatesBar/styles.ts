import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
export default StyleSheet.create({
  updatesButton: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
    rowGap: 10,
  },
  textContainer: {
    width: '100%',
    height: 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 0.5,
    borderBottomColor: colors.midGrey,
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
  updatesContainer: {
    flexDirection: 'row',
    columnGap: 10,
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
  icon: {
    marginTop: 5,
  },
});
