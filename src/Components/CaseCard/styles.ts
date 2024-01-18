import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  caseCard: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: 20,

    backgroundColor: colors.white,
    border: 'solid',
    borderColor: colors.darkGrey,
    borderWidth: 0.25,
    borderRadius: 5,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1.25,
    shadowRadius: 0.05,
    elevation: 1,
  },
  mainContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 20,
  },
  infoContainer: {
    width: '62%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  imageContainer: {
    aspectRatio: 1.1,
    width: '35%',
    borderRadius: 3,
  },
  statusContainer: {
    height: 27,
    width: 129,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.midGrey,

    shadowColor: colors.midGrey,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1.25,
    shadowRadius: 0.05,
    elevation: 1,
  },
  bottomContainer: {
    height: 36,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopWidth: 0.5,
    borderTopColor: colors.midGrey,
  },
  titleText: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
    overflow: 'hidden',
  },
  statusText: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
  },
  bottomText: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
  },
  threeDots: {
    justifyContent: 'center',
    opacity: 0.5,
  },
});
