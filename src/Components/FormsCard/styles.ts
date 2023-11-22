import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: 360, // styling width according to percentages does so relative to view width
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 12,
    paddingVertical: 23,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.darkGrey,
  },
  topContainer: {
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '88%',
  },
  formRouteButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 100,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
  },
});
