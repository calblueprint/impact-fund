import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
export default StyleSheet.create({
  container: {
    height: 47,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingHorizontal: 20,

    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.midGrey,
    borderStyle: 'solid',

    shadowColor: colors.black,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1.25,
    shadowRadius: 0.05,
    elevation: 1,
  },
  statusContainer: {
    height: 29,
    width: 177,
    justifyContent: 'center',
    alignItems: 'center',

    border: 'solid',
    borderWidth: 0.3,
    borderRadius: 5,
  },
  statusText: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
    color: colors.midnightBlack,
  },
  statusTextColor: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
  },
});
