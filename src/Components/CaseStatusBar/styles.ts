import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
export default StyleSheet.create({
  container: {
    height: 47,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  statusContainer: {
    height: 29,
    width: 177,
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 0.3,
    borderRadius: 5,
    paddingHorizontal: 3,
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
