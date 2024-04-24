import { StyleSheet } from 'react-native';

import { colors } from '../../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  outerScroll: {
    width: '93%',
    paddingVertical: 20,
  },
  innerScroll: {
    paddingVertical: 32,
    paddingHorizontal: 23,
    rowGap: 20,
    borderRadius: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    columnGap: 13,
  },
  inLineSubInfo: {
    flexDirection: 'row',
    height: 30,

    borderBottomWidth: 0.5,
    borderBottomColor: colors.midGrey,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    fontStyle: 'normal',
    color: colors.black,
    flex: 1,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: '200',
    color: colors.black,
  },
  subText: {
    fontSize: 12,
    fontStyle: 'normal',
    lineHeight: 21,
  },
  lawFirmText: {
    color: colors.darkRed,
    fontWeight: '700',
  },
  dateText: {
    color: colors.darkGrey,
    fontWeight: '300',
  },
});
