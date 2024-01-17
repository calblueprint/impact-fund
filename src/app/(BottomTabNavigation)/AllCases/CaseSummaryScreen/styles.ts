import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  outerScroll: {
    minHeight: '84%',
    width: '84%',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1.75,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 20,
  },
  blurbContainer: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 28,
    borderColor: colors.midGrey,
  },
  linkContainer: {
    height: '16%',
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: '7%',
    borderTopWidth: 0.5,
    borderColor: colors.darkGrey,
    zIndex: 2,
  },
  inLineSubInfo: {
    flexDirection: 'row',
    height: 20,
    marginTop: 15,
    marginBottom: 6,
  },
  blurbText: {
    color: colors.black,
    fontSize: 22,
    fontWeight: '700',
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
  summaryText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '200',
    lineHeight: 24,
    marginBottom: 30,
  },
});
