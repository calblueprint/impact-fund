import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  updatesButton: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
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

    borderWidth: 0.3,
    borderRadius: 5,
  },
  updatesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  statusText: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
  },
});
