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
  },
  innerScroll: {
    paddingVertical: 32,
    paddingHorizontal: 23,
    marginVertical: 20,
    rowGap: 20,
    borderRadius: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    columnGap: 13,
  },
  headerText: {
    flex: 1,
    flexDirection: 'column',
  },
  inLineSubInfo: {
    flexDirection: 'row',
    height: 30,

    borderBottomWidth: 0.5,
    borderBottomColor: colors.midGrey,
  },
  bodyText: {
    lineHeight: 24,
    fontWeight: '200',
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
  categoryText: {
    fontSize: 12,
    lineHeight: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    color: colors.midGrey,
  },
});
