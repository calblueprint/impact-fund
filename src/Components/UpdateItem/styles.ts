import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  titleContainer: {
    height: 40,
    marginTop: 5,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    color: colors.midnightBlack,
    overflow: 'hidden',
  },
  bottomText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
    color: colors.darkGrey,
  },
  updateText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '300',
    color: colors.darkGrey,
  },
  categoryText: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    color: colors.midGrey,
  },
});
