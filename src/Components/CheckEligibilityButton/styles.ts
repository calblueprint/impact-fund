import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 12,
    padding: 20,
  },
  rightContainer: {
    flexDirection: 'column',
    flex: 1,
    rowGap: 15,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.midGrey,
    paddingBottom: 5,
  },
  headerText: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 21,
    color: colors.black,
  },
  bodyText: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
    color: colors.black,
  },
});
